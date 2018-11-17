import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/css/common/validate.scss';

class Validate extends React.Component {

    render() {
        return (
            <div className="validate">
                <div className="validate-img">
                    <div className="bg-img"></div>
                    <div className="drag-item"></div>
                </div>
                <div className="validate-drag">
                    <div className="drag-bg">
                        <span>>>> 按住滑块拖动完成验证</span>
                    </div>
                    <div className="drag-item">
                        <FontAwesomeIcon className="" icon={['fas', 'arrows-alt-h']}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        );
    }
}

export default Validate;