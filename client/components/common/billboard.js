import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/css/common/billboard.scss';

import img from '@/img/new-song-billboard.jpg';

class Billboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            songs: this.props.songs,
            title: this.props.title,
            collected: this.props.collected
        };

        this.toggleCollect = this.toggleCollect.bind(this);
    }

    /**
     * 切换收藏 / 取消收藏
     */
    toggleCollect() {
        this.setState({
            collected: !this.state.collected
        });
    }

    render() {
        return (
            <dl className="board">
                <dt className="board-top">
                    <img className="board-top-img" src={img} />
                    <p className="board-top-title">
                        <a href="#">{this.props.title}</a>
                    </p>
                    <p className="board-top-operate">
                        {
                            this.state.collected
                             ? <FontAwesomeIcon className="collected" icon={['fas', 'heart']} onClick={this.toggleCollect}></FontAwesomeIcon>
                             : <FontAwesomeIcon className="collect" icon={['far', 'heart']} onClick={this.toggleCollect}></FontAwesomeIcon>
                        }
                        <FontAwesomeIcon className="play" icon={['far', 'play-circle']}></FontAwesomeIcon>
                    </p>
                </dt>
                <dd className="board-content">
                    <ol className="board-content-list">
                        {
                            this.props.songs.map((item, index) => {
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
        );
    }
}

export default Billboard;