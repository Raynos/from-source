var fromSource = require("..")

fromSource(function (write, callback) {
    for (var count = 0; count < 5; count++) {
        write(count.toString())
    }
    callback(null, "\n")
}).pipe(process.stdout)

fromSource(function (callback) {
    callback(null, "once\n")
}, { once: true}).pipe(process.stdout)
