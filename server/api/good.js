const router = require('koa-router')();
const goods = require('../controllers/good');

router.get('/getGoods', goods.getGoods);

module.exports = router;