
import React from 'react';
import Header from '@/components/layout/header';
import Center from '@/components/layout/center';
import Home from '@/components/pages/home';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import './css/common.css';

library.add(faStroopwafel);

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