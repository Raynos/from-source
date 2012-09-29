var fromSource = require("..")

    , count = 0

fromSource(function (callback) {
    if (count < 5) {
        callback(null, (++count).toString())
    } else {
        callback(null, null)
    }
}).pipe(process.stdout)

fromSource(function (callback) {
    callback(null, (++count).toString() + "\n")
}, { once: true}).pipe(process.stdout)
