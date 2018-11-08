import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: String,
});

const User = mongoose.model('user', UserModel);

module.exports = {
    User
};
