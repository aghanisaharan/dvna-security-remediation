var express = require('express')
var bodyParser = require('body-parser')
var passport = require('passport')
var session = require('express-session')
var ejs = require('ejs')
var morgan = require('morgan')
const fileUpload = require('express-fileupload');
var config = require('./config/server')
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser' );
const winston = require('winston');
const cors = require('cors');
const csrf = require('csurf');

//Initialize Express
var app = express()
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes'
});
app.use('/login', loginLimiter);
// Advanced Security Headers with CSP and HSTS
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'"], // Allows local scripts
                styleSrc: ["'self'", "'unsafe-inline'"],  // Allows local styles
                imgSrc: ["'self'", "data:"],
                upgradeInsecureRequests: [], // Forces HTTP to HTTPS
            },
        },
        hsts: {
            maxAge: 31536000, // Enforce HTTPS for 1 year (in seconds)
            includeSubDomains: true,
            preload: true
        }
    })
);
const corsOptions = {
    origin: 'http://localhost:9090', // Strictly only allow our own frontend
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(cookieParser());
const logger = winston.createLogger({ 
    transports: [
        new winston.transports.Console(), 
        new winston.transports.File({ filename: 'security.log' })
    ]
});
logger.info('Application started');
require('./core/passport')(passport)
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());
app.use(cookieParser());
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Enable for Reverse proxy support
// app.set('trust proxy', 1) 

// Intialize Session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

// Initialize express-flash
app.use(require('express-flash')());

// Routing
app.use('/app',require('./routes/app')())
app.use('/',require('./routes/main')(passport))

// Start Server
app.listen(config.port, config.listen)
