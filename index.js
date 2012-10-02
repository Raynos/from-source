var ReadStream = require("read-stream")

module.exports = fromSource

function fromSource(generator, options) {
    var queue = ReadStream()
        , stream = queue.stream

    if (options && options.once) {
        generator.call(queue, end)
    } else {
        generator.call(queue, write, end)
    }

    return stream

    function write(chunk) {
        queue.push(chunk)

        if (options && options.once) {
            queue.end()
        }
    }

    function end(err, chunk) {
        if (err) {
            return stream.emit("error", err)
        }

        if (chunk) {
            queue.push(chunk)
        }

        queue.end()
    }
}
