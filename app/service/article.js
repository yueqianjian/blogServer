'use strict';
const Service = require('egg').Service;

class ArticleService extends Service {
    async findAll() {
        return this.ctx.model.Article.find().sort({ _id: -1 }).exec();
    }

    async create(post) {
        this.ctx.model.Article.create(post);
    }

    async findById(id) {
        return this.ctx.model.Article.findById(id).exec();
    }

    async findAndUpdate(id, post) {
        this.ctx.model.Article.findOneAndUpdate({ _id: id }, post).exec();
    }

    async findAndRemove(id) {
        this.ctx.model.Article.remove({ _id: id }, function (err) {
            console.log(err);
        });
    }
}

module.exports = ArticleService;