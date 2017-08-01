
import 'antd/dist/antd.min.css'
import '../css/public/public.css'

import React, { Component } from 'react'
import {
    Route, Router, hashHistory, IndexRoute,
} from 'react-router'
import IndexHead from '../containers/home/Header'
import IndexFooter from '../components/index_footer'


const Roots = (props) => (
    <div>
        <IndexHead />
        { props.children }
        <IndexFooter />
    </div>
)


/**
 * 按需加载之后，我们需要让路由动态加载组件。将路由拆出来（因为路由庞大之后全部写在一起会很难看）。
 * @type {{path: string, indexRoute: {}}}
 */
const rootRoute_bkup = {
    path: '/',
    component: Roots.default,
    getComponent(nextState, callback) {
        require.ensure([], require => {
            callback(null, require('../containers/home/Home').default)
        }, 'home')
    },
    childRoutes: [
        {
            path: 'train',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('../containers/EducationTrain.container').default)
                }, 'train')
            },
        }, {
            path: 'educ',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('../containers/StudentEducationStudy.container').default)
                }, 'educ')
            },
        }

    ]
}

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: Roots,
            indexRoute: {
                getComponent(nextState, callback) {
                    require.ensure([], require => {
                        callback(null, require('../containers/home/Home').default)
                    }, 'home')
                },
            },
            childRoutes: [
                {
                    path: 'home',
                    getComponent(nextState, callback) {
                        require.ensure([], require => {
                            callback(null, require('../containers/home/Home').default)
                        }, 'home')
                    },
                }, {
                    path: 'train',
                    getComponent(nextState, callback) {
                        require.ensure([], require => {
                            callback(null, require('../containers/EducationTrain.container').default)
                        }, 'train')
                    },
                }, {
                    path: 'educ',
                    getComponent(nextState, callback) {
                        require.ensure([], require => {
                            callback(null, require('../containers/StudentEducation.container').default)
                        }, 'educ')
                    },
                }
            ]
        }
    ]
}
const RouterJSX = <Router history={hashHistory} routes={rootRoute} />

export default RouterJSX
