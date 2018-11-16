import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@/css/common/billboard.scss';

class Billboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            songs: this.props.songs,
            title: this.props.title
        };
    }

    render() {
        return (
            <dl className="board">
                <dt className="board-top">
                    <div className="board-top-img" src="#"></div>
                    <p className="board-top-title">
                        <a href="#">{this.props.title}</a>
                    </p>
                    <p className="board-top-operate">
                        <FontAwesomeIcon className="collect" icon={['far', 'heart']}></FontAwesomeIcon>
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