import React from 'react';
import '../css/header.scss';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.name = '';
    }

    getData() {
        request.get('/api/users/current')
            .end((err, res)=> {
                if (err) {
                    if (res.statusCode === 401) {
                        alert('Please Login!');
                        location.href = '/#/login-page'
                    } else {
                        return alert(err);
                    }
                }
            });
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