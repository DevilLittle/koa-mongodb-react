/**
 * koa2 server 入口
 */
import db from './mongodb/db';

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

// const dateBase = require('./mongodb/db');
const schema = require('./mongodb/schema');

const opn = require('opn');
const config = merge(require('../config/webpack.config.dev'));
const appConfig = require('../app.config');
const currentIP = require('ip').address();
const uri = `http://${currentIP}:${appConfig.appPort}`;
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

const router = KoaRouter;
const date = new Monk('localhost/example');// 链接到库
const user = date.get('user');// 表

// koa server
const app = new Koa();

// dateBase.connect();
// db.connect((err) => {
//     if (err) throw err;

// console.log('=======================');
// console.log('success');
// schema
// blogModel.find({title: "Mongoose", meta.votes: 100}, {title: 1, author: 1, body: 1}, function(err, docs){
//     if(err) console.log(err);
//     console.log('查询结果：' + docs);
// });
// console.log('Listening on 3000');
// });

// app.use('/api', apiRouter);
// if (require.main === module) {
//     app.listen(3000, function () {
//         db.connect((err) => {
//             if (err) return console.error('db connection failed');
//             // console.log('Listening on 3000');
//         });
//     });
// }

// KoaRouter.get('/getData', async (ctx, next) => {
//     // 从上下文的request对象中获取
//     let request = ctx.request;
//     // 获取格式化参数
//     let req_query = request.query;
//     // 获取字符串
//     let req_querystring = request.querystring;
//
//     // 从上下文中直接获取
//     let ctx_query = ctx.query;
//     let ctx_querystring = ctx.querystring;
//     let obj = {
//         req_query: req_query,
//         req_querystring: req_querystring,
//         ctx_query: ctx_query,
//         ctx_querystring: ctx_querystring
//     };
//     ctx.response.body = {status: 200, msg: '这是get测试的返回数据', data: obj};
// });

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
    // middleware

    // [AsyncFunction: logger]     --loggerMiddleware

    // [Function: compress]        --koaCompress

    // Function]                   --errorMiddleware

    // { [AsyncFunction: koaMiddleware]                 --convert(devMiddleware)
    //     getFilenameFromUrl: [Function: bound ],
    //     waitUntilValid: [Function: waitUntilValid],
    //     invalidate: [Function: invalidate],
    //     close: [Function: close],
    //     fileSystem: MemoryFileSystem { data: {} } }

    // { [Function: converted] _name: '' }              --convert(webpackHotMiddleware(clientCompiler))

    //     [Function: spa]                              --spaMiddleWare()

    // { [Function: dispatch]                           --KoaRouter.middleware()
    //     router:
    //         Router {
    //     opts: {},
    //     methods: [ 'HEAD', 'OPTIONS', 'GET', 'PUT', 'PATCH', 'POST', 'DELETE' ],
    //         params: {},
    //     stack: [ [Object] ] } }

    //     [Function]                                   --proxyMiddleware
    app.use(middleware);
});

// 打印request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 对于任何请求，app将调用该异步函数处理请求：
router.get('/', async (ctx) => {
    ctx.response.type = 'text/html';
    ctx.body = 'hi';
});
router.get('/getList', async (ctx) => {
    let st = await user.find();
    ctx.response.type = 'application/json';
    ctx.body = st;
});

// 加载路由中间件
// 解释：app.use 加载用于处理http請求的middleware（中间件），当一个请求来的时候，会依次被这些 middlewares处理。
// app.use(router.routes());
// app.use(KoaRouter.get('/', main));
console.log('> Starting dev server...');

devMiddleware.waitUntilValid(() => {
    // console.log('> Listening at ' + uri + '\n');
    // opn(uri)
});

// 错误处理
app.on('error', (err) => {
    console.error('Server error: \n%s\n%s ', err.stack || '');
});

app.listen(appConfig.appPort, () => {
    console.log('success');
});
