const fs = require('fs');
const path = require('path');
const LruCache = require('lru-cache');
const cache = new LruCache();
const mongoose = require("mongoose");
const ReqRouter = require('./decorator-router');
const models = require('../models');
const config = require('../config');
const resolve = (_) => path.resolve(__dirname, _);

let adminHtml = fs.readFileSync(resolve('../../static/app/admin.html'), 'utf-8');
let indexHtml = fs.readFileSync(resolve('../../static/app/index.html'), 'utf-8');
adminHtml = adminHtml.replace('<!-- name -->', config.site.name + "后台");

function cacheHtml(name) {
    const key = 'blog@home-html-' + name;
    let val = cache.get(key);
    if (!val) {
        const str = name ? name + ' | ' : '';
        val = indexHtml.replace('<!-- name -->', str + config.site.name + "博客");
        cache.set(key, val)
    }
    return val;
}

@ReqRouter.ROUTER('')
class SSR {

    @ReqRouter.GET('/blog/admin')
    static async admin(req, res, next) {
        res.end(adminHtml);
    }

    @ReqRouter.GET('/blog/articles/:_id')
    static async article(req, res, next) {
        const article = await models.Article.findById(req.params._id, 'title');
        res.end(cacheHtml(article.title))
    }

    @ReqRouter.GET('/blog/guestbook')
    static async guestbooks(req, res, next) {
        res.end(cacheHtml('留言版'))
    }

    @ReqRouter.GET('/blog/about')
    static async about(req, res, next) {
        res.end(cacheHtml('关于'))
    }

    @ReqRouter.GET('/blog')
    static async blog(req, res, next) {
        res.end(cacheHtml())
    }

    @ReqRouter.USE('/')
    static async home(req, res, next) {
        res.end(cacheHtml())
    }

}