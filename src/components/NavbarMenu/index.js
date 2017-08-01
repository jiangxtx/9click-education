/**
 * Created by Jiangxtx on 2017/7/11-11:32.
 * Description:
 */

import React ,{ Component } from 'react'
import { Spin, Menu } from 'antd'
import { Link } from 'react-router'
// import _throttle from 'lodash.throttle'

import './index.scss'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // window.addEventListener('scroll', throttledResponse);
    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', throttledResponse)
    }

    render() {
        const { navbarList, currentKey, mode="horizontal" } = this.props;
        // console.log('navbarmenu key: ', currentKey)
        const _defaultKey = '0';

        const navlistJSX = navbarList && navbarList.map((item,idx) => (
            <Menu.Item key={idx + ''}>
                <Link to={ item.link } activeClassName="active-link" >{ item.title }</Link>
            </Menu.Item>
        ));

        return (
            <div className={`navbar ${mode}`} >
                { !!currentKey &&
                    <Menu mode={ mode }
                          selectedKeys={[currentKey]} >
                        { navlistJSX }
                    </Menu>
                }
                { !currentKey &&
                    <Menu mode={ mode }
                          defaultSelectedKeys={[_defaultKey]} >
                        { navlistJSX }
                    </Menu>
                }
            </div>
        )
    }
}