const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async list() {
        const article = await this.service.article.findAll();
        this.ctx.body = article
    }

    async create() {
        const { ctx, service } = this
        const { title, info, content } = ctx.request.body
        let articleContent = await service.articleContent.create({
            content
        })
        await service.article.create({
            title,
            info,
            content: articleContent._id
        });
        ctx.body = true
    }

    async findById() {
        const { ctx, service } = this
        const { id } = ctx.request.body
        let data = await service.article.findById(id);
        ctx.body = data
    }

    async getContent() {
        const { ctx, service } = this
        const { id } = ctx.request.body
        let data = await service.articleContent.findById(id);
        ctx.body = data.content
    }

    async remove() {
        const { ctx, service } = this
        const { id } = ctx.request.body
        await service.article.remove(id);
        ctx.body = true
    }

    async update() {
        const { ctx, service } = this
        const { id, title, info, content } = ctx.request.body
        let contentID = await service.article.update(id, { title, info });
        await service.articleContent.update(contentID.content, { content });
        ctx.body = true
    }
}

module.exports = ArticleController;