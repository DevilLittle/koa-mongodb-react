
import React from 'react';
import Header from '@/components/layout/header';
import Center from '@/components/layout/center';
import Album from '@/components/common/album';

import './css/common.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Center>
                    <Album />
                </Center>
            </div>
        );
    }
}

export default App;