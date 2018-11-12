import React from 'react';
import '@/css/common/album-item.scss';

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
            descIcon: this.props.descIcon
        };
    }

    render() {
        return (
            <div className="album-item">
                <div className="album-item-box">
                    <img className="item-img" src={this.props.imgUrl} />
                    <a className="item-link" title={this.props.desc} href={this.props.linkUrl}></a>
                    <p className="item-detail">
                        <span className="count">播放数</span>
                        <span className="count">{this.props.playCount}</span>
                        <span className="play">播放</span>
                    </p>
                </div>
                <div className="album-item-desc">
                    <a href={this.props.linkUrl} title={this.props.desc}>{this.props.desc}</a>
                </div>
            </div>
        );
    }
}

export default AlbumItem;