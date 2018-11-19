/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
module.exports.getOptions = function(env) {
  return {
    assertPath: 'static'
  }
}
module.exports.server = {
  port: 9090,
  autoOpenBrowser: false
}
module.exports.mock = {
  isMock: false,
  path: '/oflane/',
  url: 'http://localhost:8080',
  proxy: {
    loginUrl: '',
    url: 'http://localhost:8080',
    username: 'hrtest88',
    password: '97bbc79679fe1cfd9afb52fd6f01d033b479555d'
  }
}
