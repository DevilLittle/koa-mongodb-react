const goodModel = require('../schema/good');

class Good {
    constructor() {
        this.model = goodModel;
    }

    save(opts) {
        this.entity = new goodModel(opts);
        return this.entity.save();
    }

    findOne(opts) {
        return this.model.findOne(opts).exec();
    }

    find(opts) {
        return this.model.find(opts).exec();
    }

    update(slect, upt) {
        return this.model.update(slect, upt).exec();
    }

    queryAll(_limit, num) {
        return this.model.find({})
            .limit(_limit)
            .skip(num)
            .sort({'meta.createAt': -1})
            .populate('user', 'user nickname _id')
            .populate('comments.from', 'user nickname _id')
            .populate('comments.to', 'user nickname _id')
            .exec();
    }

    queryCount() {
        return this.model.find({}).count().exec();
    }
}

module.exports = Good;