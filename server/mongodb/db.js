import mongoose from 'mongoose';
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/example';

module.exports = {
    connect: function (callback) {
        let url = 'mongodb://localhost:27017/example';
        // if (mode === 'test') {
        //     url = 'mongodb://localhost/newSchoolRunner-demo';
        // }
        mongoose.connect(url);
        const dbt = mongoose.connection;

        // dbt.on('error', (err) => {
        //     console.error(err);
        // });
        dbt.once('open', callback);

    },

    close: function (callback) {
        mongoose.connection.close(callback);
    }
};
