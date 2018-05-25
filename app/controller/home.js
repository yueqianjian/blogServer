'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const db = require('../service/db');

class HomeController extends Controller {
  async index() {
    const filePath = path.resolve(this.app.config.static.dir, 'index.html');
    this.ctx.set('Content-Type', 'text/html');
    this.ctx.body = await fs.readFileSync(filePath);
  }

  async list() {
    this.ctx.body = '123'
  }
}

module.exports = HomeController;
