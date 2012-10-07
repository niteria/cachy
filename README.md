cachy
=====

Proxy server with non-expiring disk cache

# Why?

## Offline dev / Quick and dirty mock server

Your app depends on some external apis or resources, you run your
app with cachy in between, it records your traffic and later it
will respond with the data it cached.

# Run

    $ npm install
    $ node cachy.js

# Use

Prefix your http GETs in your app with `http://127.0.0.1:8080/?`, e.g. 
`http://127.0.0.1:8080/?http://google.com`

# Usage

    Usage: cachy.js [options]

    Options:

      -h, --help         output usage information
      -V, --version      output the version number
      -p --port <n>      Proxy port
      -O --offline       Offline mode
      -c --cache <path>  Cache directory

# Security

No attempt whatsoever. Use at your own risk.

# Possible improvements

* Capture headers
* Capture timing
* Simulate bad behaviour (to test timeouts for example)

# License

(The MIT License)

Copyright (c) 2012 Bartosz Nitka. http://about.me/niteria

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
