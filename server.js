var express = require('express')
var bodyParser = require('body-parser')
var passport = require('passport')
var session = require('express-session')
var ejs = require('ejs')
var morgan = require('morgan')
const fileUpload = require('express-fileupload');
var config = require('./config/server')

//Initialize Express
var app = express()
const helmet = require('helmet');
app.use(helmet());
const cookieParser = require('cookie-parser')
app.use(cookieParser());
const winston = require('winston');
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
