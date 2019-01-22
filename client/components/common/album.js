import React from 'react';
import AlbumItem from './album-item';
import '@/css/common/album.scss';
import axios from 'axios';
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
                imgUrl: '#',
                linkUrl: '#',
                playCount: 0,
                desc: '『温情冷暖 ，人间的烟火故事』'
            }, {
                id: '2',
                imgUrl: '#',
                linkUrl: '#',
                playCount: 0,
                desc: '零度星球 | 只有电子能拯救宇宙'
            }, {
                id: '3',
                imgUrl: '#',
                linkUrl: '#',
                playCount: 0,
                desc: '100首华语民谣，因为懂得才有共鸣'
            }, {
                id: '4',
                imgUrl: '#',
                linkUrl: '#',
                playCount: 0,
                desc: '《无患记》预告'
            }, {
                id: '5',
                imgUrl: '#',
                linkUrl: '#',
                playCount: 0,
                desc: '100首华语民谣，因为懂得才有共鸣'
            }, {
                id: '6',
                imgUrl: '#',
                linkUrl: '#',
                playCount: 0,
                desc: '《无患记》预告'
            }]
        };

        axios.get('http://172.28.194.47:8088/api/good/getGoods').then(res=>{
            console.log(res);
        })
    }

    render() {
        return (
            <div className="album">
                <ul className="album-list">
                    {
                        this.state.albums.map(item => {
                            return (
                                <li className="album-list-item" key={item.id}>
                                    <AlbumItem imgUrl={item.imgUrl} linkUrl={item.linkUrl} playCount={item.playCount} desc={item.desc} />
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