'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      const filePath = path.resolve(this.app.config.static.dir, 'index.html');
      this.ctx.set('Content-Type', 'text/html');
      this.ctx.body = await fs.readFileSync(filePath);
  }
}

module.exports = HomeController;
