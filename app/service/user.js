'use strict';
const Service = require('egg').Service;

class UserService extends Service {
    async find({ username, password }) {
        return this.ctx.model.User.findOne({ username, password })
    }
}

module.exports = UserService;