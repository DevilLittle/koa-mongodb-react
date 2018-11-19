import React from 'react';
import '@/css/layout/center.scss';

class Center extends React.Component {
    render() {
        return (
            <div className="center">
                {this.props.children}
            </div>
        );
    }
}

export default Center;