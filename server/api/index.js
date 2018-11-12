let monModel = require('../mongodb/schema/good');

// 插入商品
exports.insertGoods = async () => {
    // 商品内容信息
    let content = {
        sname: '苹果',
        sprice: 5908,
        stock: 100,
        addtime: Date.now(),
        sinfo: '很不错的笔记本，值得购买'
    };
    // 把商品内容信息写入数据库
    let monInsert = new monModel(content);

    // 插入
    monInsert.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('商品数据写入成功');
        }
    });
};

// 查询
exports.search = async () => {
    // 查询条件
    let tj = {sname: '联想笔记本'};

    // 查询商品内容信息
    let fields = {
        sname: 1,
        sprice: 2,
        stock: 3,
        addtime: 4,
        sinfo: 5
    };

    monModel.find(tj, fields, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
};

// 修改
exports.update = async () => {
    // 条件
    let tj = {sname: '联想笔记本'};

    // 修改商品内容信息
    let content = {
        sname: '网易云音乐',
        sprice: 10000
    };

    monModel.update(tj, content, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('商品数据修改成功');
        }
    });

};

// 删除
exports.delete = async () => {
    // 条件
    let tj = {sname: '苹果'};

    // 把商品内容信息删除数据库
    monModel.remove(tj, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('商品数据删除成功');
        }
    });
};