
import React from 'react';
import Header from '@/components/layout/header';
import Center from '@/components/layout/center';
import Home from '@/components/pages/home';

// 引入 FontAwesome 字体库
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './css/common.css';

// 引入全部 FontAwesome 字体
library.add(fab, fas, far);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Center>
                    <Home />
                </Center>
            </div>
        );
    }
}

export default App;