'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527163444413_2216';

  // add your config here
  config.middleware = [ 'cors' ];

  return config;
};
