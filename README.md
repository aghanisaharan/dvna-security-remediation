# Web Application Security Audit & Remediation

## Overview
This repository contains the code, configurations, and final reporting for a 3-week cybersecurity internship project. The objective was to perform a vulnerability assessment on a vulnerable Node.js web application (DVNA) and implement security patches to mitigate identified risks.

## Project Scope
### Week 1: Security Assessment
* **Vulnerability Scanning:** Utilized OWASP ZAP to identify security misconfigurations and missing HTTP headers.
* **Manual Testing:** Successfully identified and verified a Stored Cross-Site Scripting (XSS) vulnerability and tested SQL Injection defenses.
* **Documentation:** Compiled a comprehensive initial assessment report detailing findings and proof-of-concept exploits.

### Week 2: Implementing Security Measures
* **Input Sanitization:** Mitigated the Stored XSS vulnerability by implementing the `validator` library to escape malicious user inputs.
* **Secure Headers:** Deployed `helmet.js` to enforce secure HTTP headers (e.g., `X-Frame-Options`, `X-Content-Type-Options`).
* **Authentication Modernization:** Upgraded the application's legacy session management to a secure, Token-Based Authentication system utilizing JSON Web Tokens (`jsonwebtoken`) and `cookie-parser`.

### Week 3: Advanced Security & Logging
* **Penetration Testing:** Conducted local network reconnaissance and service detection using `Nmap`.
* **Application Logging:** Integrated the `winston` library to actively monitor and log security events to a local `security.log` file.
* **Best Practices:** Developed a security checklist enforcing strict input validation, HTTPS encryption, and robust password hashing (`bcrypt`).

## Repository Contents
* `/core`, `/routes`, `server.js` - The patched application source code.
* `security.log` - Output from the Winston logging implementation.
* `Security_Audit_Report.pdf` - The comprehensive 3-week task report detailing vulnerabilities, remediation steps, and screenshots.

## Technologies Used
* Node.js / Express.js
* OWASP ZAP
* Nmap
* Helmet.js, Validator, JsonWebToken (JWT), Winston, Bcrypt