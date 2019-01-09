import React from 'react';
import AlbumItem from './album-item';
import '@/css/common/album.scss';

const img = require('@/img/back.jpg');

/**
 * 专辑组件
 */
class Album extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // 专辑列表
            albums: [{
                id: '1',
                imgUrl: img,
                linkUrl: '#',
                playCount: 0,
                desc: '『温情冷暖 ，人间的烟火故事』',
                collected: true
            }, {
                id: '2',
                imgUrl: img,
                linkUrl: '#',
                playCount: 0,
                desc: '零度星球 | 只有电子能拯救宇宙'
            }, {
                id: '3',
                imgUrl: img,
                linkUrl: '#',
                playCount: 0,
                desc: '100首华语民谣，因为懂得才有共鸣',
                collected: true
            }, {
                id: '4',
                imgUrl: img,
                linkUrl: '#',
                playCount: 0,
                desc: '《无患记》预告'
            }, {
                id: '5',
                imgUrl: img,
                linkUrl: '#',
                playCount: 0,
                desc: '100首华语民谣，因为懂得才有共鸣'
            }, {
                id: '6',
                imgUrl: img,
                linkUrl: '#',
                playCount: 0,
                desc: '《无患记》预告',
                collected: true
            }]
        };
    }

    render() {
        return (
            <div className="album">
                <ul className="album-list">
                    {
                        this.state.albums.map(item => {
                            return (
                                <li className="album-list-item" key={item.id}>
                                    <AlbumItem imgUrl={item.imgUrl} linkUrl={item.linkUrl} playCount={item.playCount} desc={item.desc} collected={item.collected} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Album;