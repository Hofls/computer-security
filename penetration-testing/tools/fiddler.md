### Info
* Fiddler - Modern alternative to Wireshark

### Catch Android emulator traffic
* Install `Fiddler Everywhere` (using fake email)
    * Not sure if necessary - `Settings -> Connections -> Allow remote computers to connect`
* Open android emulator
    * Settings -> Search field -> Wifi -> Touch active -> Edit 
        * Proxy - Manual
        * IP - 10.0.2.2
        * Port - 8866
    * Open Google Chrome, go to url http://example.com
        * Fiddler should catch request/response
