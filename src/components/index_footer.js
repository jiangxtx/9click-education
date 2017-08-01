import React, { Component, ProTypes } from 'react';

import '../css/home/index_foot.css';

import QRcode from '../img/home/QRcode.png'

class IndexFooter extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <div className="foot">
                    <img src={ QRcode } alt=""/>
                    <div className="foot-descp">
                        <p>&copy;2017 上海智而仁教育培训有限公司</p>
                        <p>ICP备案：沪ICP备15038486 号-1</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexFooter