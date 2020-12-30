#### Installation
* Install Burp Suite (MXByb2dz)
* Download payloads (git clone / wget)
    * https://github.com/xmendez/wfuzz/tree/master/wordlist
        * On Kali - `/usr/share/wfuzz/wordlist/`
    * https://github.com/1N3/IntruderPayloads
* 

#### Tabs review
* `Dashboard` - automatic scan, vulnerability detection
* `Target` - limit activity to specific domain, site map
* `Proxy` - run browser to capture requests
* `Intruder` - send bunch of requests with different parameters (payload)
* `Repeater` - modify request and send it again
* `Sequencer` - analyze quality of randomness (e.g. anti-CSRF tokens, password reset tokens)
* `Decoder` - decode/encode/hash (e.g. base64, hex, binary)
* `Comparer` - diff checker
* `Extender` - find and install plugins
* `Project Options` - cookies, macros
* `User options` - proxy

#### Dashboard. Scan


#### Intruder
* Attack (SQL Injection)
    * Proxy → (Browser → Send request) → HTTP History → Send to intruder
    * Intruder → Positions → Select login → Add → Payloads
    * Payloads → Load... → SQL.txt → Start attack
* 

#### Extender. BApp Store
* 
* 

#### Errors
* Refusing to start browser as your configuration does not support running without sandbox
    * Main - `Project options → Misc → Allow the embedded browser to run without a sandbox`
    * Alternative - `find .BurpSuite -name chrome-sandbox -exec chown root:root {} \; -exec chmod 4755 {} \;`
* Unable to start browser: No protocol specified
    * Run burp without `su`
