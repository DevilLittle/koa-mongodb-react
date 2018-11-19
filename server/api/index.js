const router = require('koa-router')();

const user_router = require('./user_router');
const music_router = require('./music');
const good_router = require('./good');

router.use('/users', user_router.routes(), user_router.allowedMethods());
router.use('/music', music_router.routes(), music_router.allowedMethods());
router.use('/good', good_router.routes(), good_router.allowedMethods());

module.exports = router;
