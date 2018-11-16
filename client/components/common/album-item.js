import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/css/common/album-item.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

/**
 * 单个专辑
 */
class AlbumItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // 专辑图像
            imgUrl: this.props.imgUrl,
            // 跳转地址 / 跳转参数
            linkUrl: this.props.linkUrl,
            // 播放次数
            playCount: this.props.playCount,
            // 专辑描述
            desc: this.props.desc,
            // 描述图标（待定）
            descIcon: this.props.descIcon,
            // 手否收藏
            collected: false
        };

        this.playAlbum = this.playAlbum.bind(this);
        this.toAlbum = this.toAlbum.bind(this);
        this.toggleCollected = this.toggleCollected.bind(this);
    }

    playAlbum() {
        alert('播放专辑');
    }

    toAlbum() {
        alert('进入专辑');
    }

    /**
     * 收藏 / 取消收藏
     */
    toggleCollected() {
        this.setState({
            collected: !this.state.collected
        });
    }

    render() {
        return (
            <div className="album-item">
                <div className="album-item-content">
                    <div className="bg-img" title="查看专辑" onClick={this.toAlbum}></div>
                    <p className="item-title">{this.props.desc}</p>
                    <div className="mask" title="播放专辑" onClick={this.playAlbum}>
                        <FontAwesomeIcon className="play" icon={['far', 'play-circle']}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="album-item-bottom">
                    <div className="item-detail">
                        <span className="count">播放数</span>
                        <span className="count">{this.props.playCount}</span>
                        <div className="icon-group">
                            <div className="icon" onClick={this.toggleCollected}>
                                {
                                    this.state.collected ? <FontAwesomeIcon className="collected" icon={['fas', 'heart']}></FontAwesomeIcon> : <FontAwesomeIcon icon={['far', 'heart']}></FontAwesomeIcon>
                                }
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={['fas', 'share-alt']}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumItem;