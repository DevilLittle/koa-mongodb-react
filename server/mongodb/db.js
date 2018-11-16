import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/example';

module.exports = {
    connect: function (callback) {
        // if (mode === 'test') {
        //     url = 'mongodb://localhost/newSchoolRunner-demo';
        // }
        mongoose.connect(url);
        mongoose.connection.once('open', callback);
    },
    error: function (callback) {
        mongoose.connection.on('error', callback);
    },
    close: function (callback) {
        mongoose.connection.close(callback);
    }
};
