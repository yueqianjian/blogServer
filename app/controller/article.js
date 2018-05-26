const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async list() {
        await this.service.article.create({
            title: 'test',
            content: 'test content'
        });
        const article = await this.service.article.findAll();
        this.ctx.body = article
    }
}

module.exports = ArticleController;