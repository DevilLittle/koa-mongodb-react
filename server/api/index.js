// import Koa from 'koa';
// import Router from 'koa-router';
// import Goods from './good';
// const router = new Router();
// import usersApi from './users';
// import messagesApi from './messages';
// import bookApi from './book';
// import renewApi from './renews';
// import bookdetailApi from './book-detail';
// const router = express.Router();

// console.log(Goods);
// router.use('/good', Goods);
// router.use('/users', usersApi);
// router.use('/messages', messagesApi);
// router.use('/users/current/books/borrowed', bookApi);
// router.use('/users/books/renew', renewApi);
// router.use('/users/current/books/book-detail', bookdetailApi);
// export default router;

const router = require('koa-router')();
const user_router = require('./user_router');

router.use('/users', user_router.routes(), user_router.allowedMethods());

module.exports = router;

// module.exports = router;