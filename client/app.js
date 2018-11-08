
import React from 'react';
import Header from './components/header';

import './css/common.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children || 'Welcome to Index Page'}
      </div>
    );
  }
}

export default App;