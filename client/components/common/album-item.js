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
                <div className="album-item-content">
                    <div className="bg-img"></div>
                    <p className="item-title">{this.props.desc}</p>
                </div>
                <div className="album-item-bottom">
                    <p className="item-detail">
                        <span className="count">播放数</span>
                        <span className="count">{this.props.playCount}</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default AlbumItem;