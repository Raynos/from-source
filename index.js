var ReadStream = require("read-stream")

module.exports = fromSource

function fromSource(generator, options) {
    var queue = ReadStream()
        , stream = queue.stream

    generator.call(queue, next)

    return stream

    function next(err, item) {
        if (err) {
            return stream.emit("error", err)
        }

        queue.push(item)

        if (options && options.once) {
            return queue.end()
        }

        if (item !== null) {
            generator.call(queue, next)
        }
    }
}
