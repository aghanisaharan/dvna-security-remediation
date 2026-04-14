# Web Application Security Audit & Remediation

## Overview
This repository contains the code, configurations, and final reporting for a 6-week cybersecurity internship project. The objective was to perform a comprehensive vulnerability assessment on a vulnerable Node.js web application (DVNA), exploit identified weaknesses, and implement robust, code-level security patches to mitigate these risks.

## Project Scope
### Week 1: Security Assessment
* **Vulnerability Scanning:** Utilized OWASP ZAP to identify security misconfigurations and missing HTTP headers.
* **Manual Testing:** Successfully identified and verified a Stored Cross-Site Scripting (XSS) vulnerability and tested SQL Injection defenses.
* **Documentation:** Compiled a comprehensive initial assessment report detailing findings and proof-of-concept exploits.

### Week 2: Implementing Security Measures
* **Input Sanitization:** Mitigated the Stored XSS vulnerability by implementing the `validator` library to escape malicious user inputs.
* **Secure Headers:** Deployed `helmet.js` to enforce baseline secure HTTP headers (e.g., `X-Frame-Options`, `X-Content-Type-Options`).
* **Authentication Modernization:** Upgraded the application's legacy session management to a secure, Token-Based Authentication system utilizing JSON Web Tokens (`jsonwebtoken`) and `cookie-parser`.

### Week 3: Advanced Security & Logging
* **Penetration Testing:** Conducted local network reconnaissance and service detection using `Nmap`.
* **Application Logging:** Integrated the `winston` library to actively monitor and log security events to a local `security.log` file.
* **Best Practices:** Developed a security checklist enforcing strict input validation, HTTPS encryption, and robust password hashing (`bcrypt`).

### Week 4: Advanced Web Security Enhancements
* **API Security Hardening:** Implemented `express-rate-limit` to neutralize automated brute-force attacks and configured `cors` middleware to strictly limit Cross-Origin Resource Sharing.
* **Advanced Security Headers:** Upgraded the Helmet configuration to enforce a strict Content Security Policy (CSP) and HTTP Strict Transport Security (HSTS).

### Week 5: Ethical Hacking & Vulnerability Remediation
* **Automated Penetration Testing:** Deployed `SQLMap` to hunt for database vulnerabilities. Automated payloads were successfully neutralized by the application's ORM and rate-limiting defenses.
* **CSRF Protection:** Integrated the `csurf` library to enforce cryptographically secure tokens on state-changing requests, preventing Cross-Site Request Forgery. 
* **Defense Verification:** Utilized `Burp Suite` to manually intercept and tamper with requests, successfully verifying the active CSRF middleware defenses.

### Week 6: Security Audits & Deployment
* **Infrastructure Auditing:** Conducted comprehensive web server vulnerability scans using `Nikto` and internal host-system hardening audits using `Lynis`.
* **Dependency Scanning:** Performed security reviews of all third-party Node.js packages using `npm audit` to identify known CVEs in legacy libraries.
* **Final Reporting:** Documented the final remediations, scan outputs, and infrastructure hardening recommendations.

## Repository Contents
* `/core`, `/routes`, `server.js` - The patched application source code.
* `security.log` - Output from the Winston logging implementation.
* `Security_Audit_Report.pdf` - The comprehensive 6-week task report detailing all vulnerabilities, proof-of-concept exploits, and code-level remediation steps.

## Technologies Used
* **Backend:** Node.js, Express.js, Sequelize (ORM)
* **Offensive Tools:** OWASP ZAP, Nmap, SQLMap, Burp Suite, Nikto, Lynis
* **Security Libraries:** Helmet.js, Validator, JsonWebToken (JWT), Winston, Bcrypt, express-rate-limit, cors, csurf
