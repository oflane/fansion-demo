const path = require('path')

module.exports.resolve = function (dir) {
  return path.resolve(process.cwd(), dir)
}
module.exports.join = function () {
  return path.posix.join.apply(path.posix, arguments)
}
