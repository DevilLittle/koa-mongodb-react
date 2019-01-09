import React from 'react';
import '@/css/common/hot-singer';

const img = require('../../img/赵雷.jpg');

/**
 * 热门歌手组件
 */
class HotSinger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            singers: [{
                id: 1,
                imgUrl: img,
                name: '赵雷',
                type: '民谣歌手'
            }, {
                id: 2,
                imgUrl: img,
                name: '赵雷',
                type: '民谣歌手'
            }, {
                id: 3,
                imgUrl: img,
                name: '赵雷',
                type: '民谣歌手'
            }, {
                id: 4,
                imgUrl: img,
                name: '赵雷',
                type: '民谣歌手'
            }, {
                id: 5,
                imgUrl: img,
                name: '赵雷',
                type: '民谣歌手'
            }]
        };
    }

    render() {
        return (
            <div className="hot-singer">
                <div className="hot-singer-top">
                    <span>热门歌手</span>
                    <a>查看全部</a>
                </div>
                <div className="hot-singer-content">
                    <ul className="list">
                        {
                            this.state.singers.map(item => {
                                return (
                                    <li className="item" key={item.id}>
                                        <img src={item.imgUrl} alt="图片"/>
                                        <div className="desc">
                                            <p className="name">{item.name}</p>
                                            <p className="type">{item.type}</p>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default HotSinger;