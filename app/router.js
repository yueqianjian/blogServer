'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/article/list', controller.article.list);
  router.post('/api/article/create', controller.article.create);
  router.post('/api/article/findById', controller.article.findById);
  router.post('/api/article/getContent', controller.article.getContent);
  router.post('/api/article/remove', controller.article.remove);
  router.post('/api/article/update', controller.article.update);
};
