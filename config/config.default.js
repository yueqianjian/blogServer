'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1527163444413_2216';

    // add your config here
    config.middleware = [];

    config.mongoose = {
        url: 'mongodb://blog:blog@localhost:27017/blog',
        options: {},
    };

    config.security = {
        xframe: {
            enable: false
        },
        csrf: {
            enable: false
        },
        domainWhiteList: ['http://localhost:8080', 'http://localhost:7001']
    };

    return config;
};
