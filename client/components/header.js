import React from 'react';
import '../css/header.scss';
import request from 'superagent';
import axios from 'axios';
const http = require('../../config/http/http');

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.name = '';
    }

    getData() {
        console.log(http);
        axios.get('/api/index/search')
            .then((err, res) => {
                console.log(res);
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <div className="top">
                    <div className="wrap">
                        <div className="title">音乐平台</div>
                        <ul className="menu">
                            <li>发现音乐</li>
                            <li>我的音乐</li>
                            <li>朋友</li>
                            <li>商城</li>
                            <li>音乐人</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;