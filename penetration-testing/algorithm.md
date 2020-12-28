### Setting up environment
* Easy way:
    * https://www.kali.org/

### Enumeration (data gathering)
* Target validation
    * `WHOIS` - information about domain owner, created/paid dates
        * `Nmap`
    * `nslookup` - query DNS to get domain name / ip address
    * `dnsrecon, dnsenum`
* Finding subdomains
    * `Sublist3r` - enumerate subdomains of websites using OSINT/bruteforce
    * `crt.sh` - web interface for certificate transparency logs
    * `Nmap` - bruteforce subdomain names
    * `dig, Bluto`
* Fingerprinting (info about open ports, software, OS)
    * `Nmap` - port scanning, version detection
    * `Wappalyzer, WhatWeb, BuiltWith, Netcat`
* Data Breaches
    * HaveIBeenPwned, ghostproject

### Vulnerability Scanning (weak spot identification)
* Burp Suite
* Zap
* Nmap - vulnerability scanner
* Acunetix, Nikto, Nessus

### Exploitation of vulnerabilities (gaining access)
* Metasploit - develop and execute exploit code
* 

### Reporting findings
* https://pentester.land/list-of-bug-bounty-writeups.html
* https://github.com/devanshbatham/Awesome-Bugbounty-Writeups
