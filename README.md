# from-source

Generate a stream from a source

## Example

``` js
var fromSource = require("from-source")

fromSource(function (write, callback) {
    for (var count = 0; count < 5; count++) {
        write(count.toString())
    }
    callback(null, "\n")
}).pipe(process.stdout)

fromSource(function (callback) {
    callback(null, "once\n")
}, { once: true}).pipe(process.stdout)

```

## Installation

`npm install from-source`

## Contributors

 - Raynos

## MIT Licenced
