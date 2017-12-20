require('babel-register');
require("babel-polyfill");
require('dotenv').config({ silent: true });
require('./admin/server.js');