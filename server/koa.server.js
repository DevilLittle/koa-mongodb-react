/**
 * koa2 server 入口
 */
import db from './mongodb/db';
import mongoose from 'mongoose';
import API from './api/index';

const Koa = require('koa');
const convert = require('koa-convert');
const webpack = require('webpack');
const merge = require('webpack-merge');

const KoaRouter = require('koa-router')();

const Monk = require('monk');

const koaCompress = require('koa-compress')();
const loggerMiddleware = require('koa-logger')();
const errorMiddleware = require('../config/middle/errorMiddleWare');
const proxyMiddleware = require('../config/middle/proxyMiddleWare');
const spaMiddleWare = require('../config/middle/spaMiddleWare');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

const opn = require('opn');
const config = merge(require('../config/webpack.config.dev'));
const appConfig = require('../app.config');
const currentIP = require('ip').address();
const url = `http://${currentIP}:${appConfig.appPort}`;
const clientCompiler = webpack(config);
const devMiddleware = webpackDevMiddleware(clientCompiler, {
    publicPath: config.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {
        colors: true,
        modules: false,
    },
    noInfo: false,
});

// koa server
const app = new Koa();

// dateBase.connect();
// mongoose.connect('mongodb://localhost/example');
// const dbt = mongoose.connection;

dbt.on('error', (err) => {
    console.error(err);
});
db.connect(() => {
    console.log('数据库已连接');
});

// 数据库接口
// API.insertGoods();
// API.search();
// API.update();
// API.delete();

// 中间件,一组async函数，generator函数需要convert转换
const middleWares = [
    // 打印请求与响应 日志
    loggerMiddleware,
    // 压缩响应
    koaCompress,
    // 错误处理
    errorMiddleware,
    // webpack开发中间件
    convert(devMiddleware),
    // webpack热替换中间件
    convert(webpackHotMiddleware(clientCompiler)),
    // spa单页应用处理,非api后段请求返回index.html
    spaMiddleWare(),
    // 路由
    KoaRouter.middleware(),
    // 代理中间件
    proxyMiddleware(),
];

middleWares.forEach((middleware) => {
    if (!middleware) return;
    app.use(middleware);
});

// 项目启动打开浏览器页面
devMiddleware.waitUntilValid(() => {
    // console.log('> Listening at ' + url + '\n');
    // opn(url)
});

// 错误处理
app.on('error', (err) => {
    console.error('Server error: \n%s\n%s ', err.stack || '');
});

app.listen(appConfig.appPort, () => {
    console.log('> Starting dev server at : ' + url);
});
