import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const monSchema = new Schema({
    sname: {type: String}, // 商品名称
    sprice: {type: Number}, // 商品价格
    stock: {type: Number}, // 库存
    sinfo: {type: String}, // 商品介绍
    addtime: {type: Number} // 添加时间
});
// 数据表
const monModel = mongoose.model('goods', monSchema);

module.exports = monModel;