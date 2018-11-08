/**
 *  * app入口文件
 *  使整个应用基于es6开发
 */

// 解决在Node环境下不能使用import问题
require('@babel/register')({
    'presets': ['@babel/preset-env', '@babel/preset-react'],
});

require('@babel/polyfill');
require('./koa.server');
