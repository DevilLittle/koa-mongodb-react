const router = require('koa-router')();
const music = require('../controllers/music');

router.get('/getMusicList', music.getMusicList);

module.exports = router;
