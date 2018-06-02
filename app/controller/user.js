const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        const { ctx, app, service } = this
        let { username, password } = ctx.request.body
        password = ctx.helper.hash(password, app.keys)
        let data = await service.user.find({ username, password });
        data = !!data
        ctx.body = data
    }
}

module.exports = UserController;