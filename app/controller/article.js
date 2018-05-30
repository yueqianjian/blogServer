const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async list() {
        const article = await this.service.article.findAll();
        this.ctx.body = article
    }

    async create() {
        const { ctx, service } = this
        const { title, content } = ctx.request.body
        let data = await service.article.create({
            title: title,
            content: content
        });
        ctx.body = data
    }

    async findById() {
        const { ctx, service } = this
        const { id } = ctx.request.body
        let data = await service.article.findById(id);
        ctx.body = data
    }

    async remove() {
        const { ctx, service } = this
        const { id } = ctx.request.body
        await service.article.remove(id);
        ctx.body = true
    }

    async update() {
        const { ctx, service } = this
        const { id, data } = ctx.request.body
        await service.article.update(id, data);
        ctx.body = true
    }
}

module.exports = ArticleController;