let mongoose = require('mongoose');
let User = mongoose.model('User');

/* 查找用户 */
exports.findAllUsers = async () => {
    let query = User.find();
    let res = [];
    await query.exec(function (err, users) {
        if (err) {
            res = [];
        } else {
            res = users;
        }
    });
    return res;
}