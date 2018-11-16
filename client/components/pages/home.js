import React from 'react';
import Album from '@/components/common/album';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/css/pages/home.scss';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

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
                        <div className="panel-content panel-flex">
                            <dl className="board">
                                <dt className="board-top">
                                    <div className="board-top-img" src="#"></div>
                                    <p className="board-top-title">
                                        <a href="#">热歌榜</a>
                                    </p>
                                    <p className="board-top-operate">
                                        <FontAwesomeIcon className="collect" icon={['far', 'heart']}></FontAwesomeIcon>
                                        <FontAwesomeIcon className="play" icon={['far', 'play-circle']}></FontAwesomeIcon>
                                    </p>
                                </dt>
                                <dd className="board-content">
                                    <ol className="board-content-list">
                                        {
                                            ['残缺的彩虹', 'My Trouble', '黑白键', 'No Candle No Light', '不相忘', '欠我个未来', '0755', '骄兵', '一曲相思', '破裂'].map((item, index) => {
                                                return (
                                                    <li className="item" key={item}>
                                                        <span className="item-num">{index + 1}</span>
                                                        <span className="item-name">
                                                            <a href="#">{item}</a>
                                                        </span>
                                                        <span className="item-play">
                                                            <FontAwesomeIcon icon={['far', 'play-circle']}></FontAwesomeIcon>
                                                        </span>
                                                    </li>
                                                );
                                            })
                                        }
                                        <li className="item">
                                            <a className="more">查看更多></a>
                                        </li>
                                    </ol>
                                </dd>
                            </dl>
                            <dl className="board">
                                <dt className="board-top">
                                    <div className="board-top-img" src="#"></div>
                                    <p className="board-top-title">
                                        <a href="#">新歌榜</a>
                                    </p>
                                    <p className="board-top-operate">
                                        <FontAwesomeIcon className="collect" icon={['far', 'heart']}></FontAwesomeIcon>
                                        <FontAwesomeIcon className="play" icon={['far', 'play-circle']}></FontAwesomeIcon>
                                    </p>
                                </dt>
                                <dd className="board-content">
                                    <ol className="board-content-list">
                                        {
                                            ['年少有为', '残缺的彩虹', 'POP/STARS', '你还在忧愁什么呢', '好喜欢你', '耳朵', '东西', '毒苹果', '贝贝', '一点点'].map((item, index) => {
                                                return (
                                                    <li className="item" key={item}>
                                                        <span className="item-num">{index + 1}</span>
                                                        <span className="item-name">
                                                            <a href="#">{item}</a>
                                                        </span>
                                                        <span className="item-play">
                                                            <FontAwesomeIcon icon={['far', 'play-circle']}></FontAwesomeIcon>
                                                        </span>
                                                    </li>
                                                );
                                            })
                                        }
                                        <li className="item">
                                            <a className="more">查看更多></a>
                                        </li>
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