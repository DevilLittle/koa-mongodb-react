import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let counter = 1;
const musicSchema = new Schema({
    id: {type: Number, default: () => counter++},
    name: {type: String},
    link: {type: String},
    desc: {type: String},
    album: {type: String},
    singer: {type: String},
    duration: {type: Date, default: Date.now()}
});
// 数据表
const musicModel = mongoose.model('music', musicSchema);

module.exports = musicModel;