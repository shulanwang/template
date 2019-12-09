'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.0.119:8088/api/Test"',
  /* BASE_API: '"http://gsign-dev.gileadchina.cn"'  */
  /* BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin/user/login"', */
})
