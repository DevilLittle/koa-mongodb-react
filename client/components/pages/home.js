import React from 'react';
import Album from '@/components/common/album';
import Billboard from '@/components/common/billboard';

import '@/css/pages/home.scss';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hotBillboard: ['残缺的彩虹', 'My Trouble', '黑白键', 'No Candle No Light', '不相忘', '欠我个未来', '0755', '骄兵', '一曲相思', '破裂'],
            newBillboard: ['年少有为', '残缺的彩虹', 'POP/STARS', '你还在忧愁什么呢', '好喜欢你', '耳朵', '东西', '毒苹果', '贝贝', '一点点']
        };
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
                            <Billboard title="热歌榜" songs={this.state.hotBillboard}></Billboard>
                            <Billboard title="新歌榜" songs={this.state.newBillboard}></Billboard>
                        </div>
                    </section>
                </div>
                <div className="right-side"></div>
            </div>
        );
    }
}

export default Home;