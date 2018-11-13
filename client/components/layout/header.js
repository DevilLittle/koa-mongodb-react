import React from 'react';
import '@/css/layout/header.scss';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu: 1
        };
        this.changeMenu = this.changeMenu.bind(this);
    }

    componentWillMount() {

    }

    /**
     * 切换菜单高亮
     * @param {*} e 
     */
    changeMenu(e) {
        this.setState({
            activeMenu: e.target.id
        });
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
                            <li><a id="1" onClick={this.changeMenu} className={this.state.activeMenu == 1 ? 'active' : ''} href="#"> 发现音乐 </a></li>
                            <li><a id="2" onClick={this.changeMenu} className={this.state.activeMenu == 2 ? 'active' : ''} href="#"> 我的音乐 </a></li>
                            <li><a id="3" onClick={this.changeMenu} className={this.state.activeMenu == 3 ? 'active' : ''} href="#"> 排行榜 </a></li>
                            <li><a id="4" onClick={this.changeMenu} className={this.state.activeMenu == 4 ? 'active' : ''} href="#"> 歌单 </a></li>
                            <li><a id="5" onClick={this.changeMenu} className={this.state.activeMenu == 5 ? 'active' : ''} href="#"> 朋友 </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;