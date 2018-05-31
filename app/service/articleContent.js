'use strict';
const Service = require('egg').Service;

class ArticleContentService extends Service {
    async findAll() {
        return this.ctx.model.ArticleContent.find().sort({ _id: -1 }).exec();
    }

    async create(post) {
        return this.ctx.model.ArticleContent.create(post);
    }

    async findById(id) {
        return this.ctx.model.ArticleContent.findById(id).exec();
    }

    async update(id, post) {
        this.ctx.model.ArticleContent.findOneAndUpdate({ _id: id }, post).exec();
    }

    async remove(id) {
        this.ctx.model.ArticleContent.remove({ _id: id }, function (err) {
            console.log(err);
        });
    }
}

module.exports = ArticleContentService;