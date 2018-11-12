import React from 'react';
import '@/css/layout/header.scss';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.name = '';
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="layout-header">
                <div className="top">
                    <div className="wrap">
                        <div className="title">
                            <h2> 音乐平台 </h2>
                        </div>
                        <ul className="menu" >
                            <li><a className="active" href="javascript:void(0)"> 发现音乐 </a></li>
                            <li><a href="javascript:void(0)"> 我的音乐 </a></li>
                            <li><a href="javascript:void(0)"> 排行榜 </a></li>
                            <li><a href="javascript:void(0)"> 歌单 </a></li>
                            <li><a href="javascript:void(0)"> 朋友 </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;