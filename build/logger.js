/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
var fs = require('fs');
/**
 * 日志对象
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2011/9/18
 */

module.exports = function (logPath, errorPath) {
  var options = {
    flags: 'a',     // append模式
    encoding: 'utf8',  // utf8编码
  }
  if(!logPath) {
    logPath = './console.log'
  }
  var stderr
  if(errorPath) {
    stderr = fs.createWriteStream(errorPath, options);
  }
  var stdout = fs.createWriteStream(logPath, options);

// 创建logger
  return new console.Console(stdout, stderr);
}
