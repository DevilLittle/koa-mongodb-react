# koa-mongodb-react

#### 技术栈
Webpack3
Koa2
Axios
React
Babel Es6/7
Eslint
stylus postcss

```
$ npm i 安装npm包
$ npm start 启动项目
```

目录结构:

|-config -
|-       http - http.js       基于axios的http请求
|
|-        middle -
|-                 eslintrc.conf.js              eslint详细配置
|-                 webpack.config.base.js        webpack基础配置
|-                 webpack.config.dev.js         webpack开发配置
|-                 webpack.config.prod.js        webpack生产配置
|
|-client -
|-         img                  图片文件
|
|-server -
|-         index.js                      server入口文件
|-         koa.server.js                 koa2服务配置
|-         mongodb -
|-                   db.js                数据库连接文件
|-                   schema.js            mongoose-schema文件


####关于Node环境下不支持ES6 import
在前后端一起进行的项目，前端是运行在浏览器上，后端是是运行在Node上
但是Node不支持ES6语法，所以使用babel转码
nodejs v6+ 不兼容 ES6 import/export 优雅解决方法
之前服务端代码都是用require来导入模块的。
但是搜了一些关于服务端渲染的文章。大多都是import导入的模块
但是Node服务端运行会报错，不支持这个import
入口文件
```
 require("babel-register")({
        'presets': ["es2015", 'react', 'stage-3'],
    });

    require('babel-polyfill');

    require('./server.js');
```

全部换成babel7