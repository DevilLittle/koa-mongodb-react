import React from 'react';
import Album from '@/components/common/album';
import '@/css/pages/home.scss';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="left-side">
                    <section className="panel recommend">
                        <div className="panel-title">
                            <a className="title">热门推荐</a>
                            <a className="more" href="#">更多</a>
                        </div>
                        <div className="panel-content">
                            <Album></Album>
                        </div>
                    </section>
                    <section className="panel new">
                        <div className="panel-title">
                            <a className="title">最新专辑</a>
                            <a className="more" href="#">更多</a>
                        </div>
                        <div className="panel-content">
                            <Album></Album>
                        </div>
                    </section>
                    <section className="panel billboard">
                        <div className="panel-title">
                            <a className="title">榜单</a>
                            <a className="more" href="#">更多</a>
                        </div>
                        <div className="panel-content">
                            <dl className="board">
                                <dt className="board-top">
                                    <img className="board-top-img" src="#" />
                                    <p className="board-top-title">
                                        <a href="#">音乐飙升榜</a>
                                    </p>
                                    <p className="board-top-operate">
                                        <a href="#" className="play">播放</a>
                                        <a href="#" className="collect">收藏</a>
                                    </p>
                                </dt>
                                <dd className="board-content">
                                    <ol className="board-content-list">
                                        {
                                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                                                return (
                                                    <li className="item" key={item}>
                                                        <span className="item-num">{item}</span>
                                                        <span className="item-name">
                                                            <a href="#">沙漠骆驼</a>
                                                        </span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ol>
                                </dd>
                            </dl>
                            <dl className="board">
                                <dt className="board-top">
                                    <img className="board-top-img" src="#" />
                                    <p className="board-top-title">
                                        <a href="#">音乐新歌榜</a>
                                    </p>
                                    <p className="board-top-operate">
                                        <a href="#" className="play">播放</a>
                                        <a href="#" className="collect">收藏</a>
                                    </p>
                                </dt>
                                <dd className="board-content">
                                    <ol className="board-content-list">
                                        {
                                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                                                return (
                                                    <li className="item" key={item}>
                                                        <span className="item-num">{item}</span>
                                                        <span className="item-name">
                                                            <a href="#">沙漠骆驼</a>
                                                        </span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ol>
                                </dd>
                            </dl>
                            <dl className="board">
                                <dt className="board-top">
                                    <img className="board-top-img" src="#" />
                                    <p className="board-top-title">
                                        <a href="#">原创音乐榜</a>
                                    </p>
                                    <p className="board-top-operate">
                                        <a href="#" className="play">播放</a>
                                        <a href="#" className="collect">收藏</a>
                                    </p>
                                </dt>
                                <dd className="board-content">
                                    <ol className="board-content-list">
                                        {
                                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                                                return (
                                                    <li className="item" key={item}>
                                                        <span className="item-num">{item}</span>
                                                        <span className="item-name">
                                                            <a href="#">沙漠骆驼</a>
                                                        </span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ol>
                                </dd>
                            </dl>
                        </div>
                    </section>
                </div>
                <div className="right-side"></div>
            </div>
        );
    }
}

export default Home;