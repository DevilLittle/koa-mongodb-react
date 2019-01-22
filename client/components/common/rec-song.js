import React from 'react';
import img from '@/img/rec-song.jpg';
import imgLogo1 from '@/img/rec-songs/logo1.jpg';
import imgLogo2 from '@/img/rec-songs/logo2.jpg';
import imgLogo3 from '@/img/rec-songs/logo3.jpg';

import '@/css/common/rec-song.scss';

class RecSong extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: [{
                imgUrl: img,
                name: 'Hello My Love',
                singer: 'WestLife'
            }, {
                imgUrl: imgLogo1,
                name: '年少有为',
                singer: '李荣浩'
            }, {
                imgUrl: imgLogo2,
                name: '有梦可待',
                singer: '陈立农'
            }, {
                imgUrl: imgLogo3,
                name: '失忆',
                singer: '刘崇建/图小图'
            }, {
                imgUrl: imgLogo1,
                name: '大人物',
                singer: 'GAI周延'
            }, {
                imgUrl: imgLogo2,
                name: '终于了解自由',
                singer: '周兴哲'
            }, {
                imgUrl: imgLogo3,
                name: '我爱你三个字能倒过来',
                singer: '张靓颖'
            }, {
                imgUrl: imgLogo1,
                name: '我乐意',
                singer: '许嵩'
            }, {
                imgUrl: imgLogo2,
                name: '怎么了',
                singer: '周兴哲'
            }, {
                imgUrl: imgLogo3,
                name: '天亮以前说再见',
                singer: '何野'
            }]
        };
    }

    render() {
        return (
            <div className="rec-song">
                <div className="rec-song-top">
                    <span>单曲推荐</span>
                    <a>更多</a>
                </div>
                <div className="rec-song-content">
                    <ul className="list">
                        {
                            this.state.songs.map(item => {
                                return (
                                    <li className="item" key={item.id} title={item.name}>
                                        <img src={item.imgUrl} alt="图片"/>
                                        <div className="desc">
                                            <p className="name"><span>{item.singer} - </span>{item.name}</p>
                                            <p className="singer">- {item.singer}</p>
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

export default RecSong;
