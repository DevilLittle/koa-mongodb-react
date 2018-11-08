import mongoose from 'mongoose';
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/example';

// module.exports = {
//     connect: function () {
//         MongoClient.connect(url, function (err, db) {
//             if (err) throw err;
//             console.log('数据库已连接!');
//             let dbo = db.db('example');
//             dbo.collection('user').find({}).toArray(function (err, result) { // 返回集合中所有数据
//                 if (err) throw err;
//                 console.log(result);
//                 // db.close();
//             });
//         });
//     },
//     close: function () {
//
//     }
//
// };

module.exports = {
    connect: function (mode, callback) {
        let url = 'mongodb://localhost:27017/example';
        // if (mode === 'test') {
        //     url = 'mongodb://localhost/newSchoolRunner-demo';
        // }
        mongoose.connect(url, callback);
    },
    close: function (callback) {
        mongoose.connection.close(callback);
    }
};
