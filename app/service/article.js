'use strict';
const Service = require('egg').Service;

class ArticleService extends Service {
    async findAll() {
        return this.ctx.model.Article.find().sort({ _id: -1 }).exec();
    }

    async create(post) {
        return this.ctx.model.Article.create(post);
    }

    async findById(id) {
        return this.ctx.model.Article.findById(id).exec();
    }

    async update(id, post) {
        return this.ctx.model.Article.findOneAndUpdate({ _id: id }, post).exec();
    }

    async remove(id) {
        this.ctx.model.Article.remove({ _id: id }, function (err) {
            console.log(err);
        });
    }
}

module.exports = ArticleService;