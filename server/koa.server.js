const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const webpack = require('webpack');
const merge = require('webpack-merge');
const KoaRouter = require('koa-router')();
const koaCompress = require('koa-compress')();
const loggerMiddleware = require('koa-logger')();
const errorMiddleware = require('../config/middle/errorMiddleWare');
const proxyMiddleware = require('../config/middle/proxyMiddleWare');
const spaMiddleWare = require('../config/middle/spaMiddleWare');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const config = merge(require('../config/webpack.config.dev'));
const appConfig = require('../app.config');
const currentIP = require('ip').address();
const url = `http://${currentIP}:${appConfig.appPort}`;

const db = require('./mongodb/db');

const clientCompiler = webpack(config);
const devMiddleware = webpackDevMiddleware(clientCompiler, {
    publicPath: config.output.publicPath,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    stats: {
        colors: true,
        modules: false,
    },
    noInfo: false,
});

// koa server
const app = new Koa();
app.use(bodyParser());
let router = KoaRouter;

db.error((err) => {
    console.error(err);
});
db.connect(() => {
    console.log('数据库已连接');
});

// 注册路由
app.use(router.routes());
app.use(router.allowedMethods());

const api = require('./api');
router.use('/api', api.routes(), api.allowedMethods());

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
    // KoaRouter.middleware(),
    // 代理中间件
    proxyMiddleware(),
];

middleWares.forEach((middleware) => {
    if (!middleware) return;
    app.use(middleware);
});

// 错误处理
app.on('error', (err) => {
    console.error('Server error: \n%s\n%s ', err.stack || '');
});

app.listen(appConfig.appPort, () => {
    console.log('> Starting dev server at : ' + url);
});
