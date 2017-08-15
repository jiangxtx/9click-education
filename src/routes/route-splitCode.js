
// import 'antd/dist/antd.min.css'
import '../css/public/public.less'

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

// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function (dependencies, callback) {
        callback(require)
    }
}

/**
 * 按需加载之后，我们需要让路由动态加载组件。将路由拆出来（因为路由庞大之后全部写在一起会很难看）。
 * @type {{path: string, indexRoute: {}}}
 */
const clientRootRoute = {
    childRoutes: [
        {
            path: '/',
            component: Roots,  // should NOT write 'Roots.default'.
            indexRoute: {
                getComponent(nextState, callback) {
                    require.ensure([], require => {
                        callback(null, require('../containers/home/Home').default)
                    }, 'home')
                },
            },
            childRoutes: [
                {
                    path: `train`,
                    component: require('../containers/EducationTrain.container').default,
                    indexRoute: {
                        getComponent(nextState, callback) {
                            require.ensure([], require => {
                                callback(null, require('../containers/EducationTrainMain.container').default)
                            }, 'train')
                        },
                    },
                    childRoutes: [
                        {
                            path: 'online',
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/EducationTrainOnline.container').default)
                                }, 'trainOnline')
                            },
                        }, {
                            path: `detail/:tid`,
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/EducationTrainDetail.container').default)
                                }, 'trainDetail')
                            },
                        }
                    ],
                }, {
                    path: `educ`,
                    component: require('../containers/StudentEducation.container').default,
                    indexRoute: {
                        getComponent(nextState, callback) {
                            require.ensure([], require => {
                                callback(null, require('../containers/StudentEducationMain.container').default)
                            }, 'educ')
                        },
                    },
                    childRoutes: [
                        {
                            path: 'study',
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/StudentEducationStudy.container').default)
                                }, 'educStudy')
                            },
                        }
                    ],
                }, {
                    path: `case`,
                    component: require('../containers/SuccessCase.container').default,
                    indexRoute: {
                        getComponent(nextState, callback) {
                            require.ensure([], require => {
                                callback(null, require('../containers/SuccessCaseMain.container').default)
                            }, 'case')
                        },
                    },
                    childRoutes: [
                        {
                            path: `detail/:cid`,
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/SuccessCaseDetail.container').default)
                                }, 'caseDetail')
                            },
                        }
                    ],
                }, {
                    path: `about`,
                    component: require('../containers/AboutUs.container').default,
                    indexRoute: {
                        getComponent(nextState, callback) {
                            require.ensure([], require => {
                                callback(null, require('../containers/AboutUsMain.container').default)
                            }, 'about')
                        },
                    },
                    childRoutes: [
                        {
                            path: `team`,
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/AboutUsTeam.container').default)
                                }, 'aboutTeam')
                            },
                        }, {
                            path: `partner`,
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/AboutUsPartner.container').default)
                                }, 'aboutPartner')
                            },
                        }, {
                            path: `recruit`,
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/AboutUsRecruit.container').default)
                                }, 'aboutRecruit')
                            },
                        }, {
                            path: `contact`,
                            getComponent(nextState, callback) {
                                require.ensure([], require => {
                                    callback(null, require('../containers/AboutUsContact.container').default)
                                }, 'aboutContact')
                            },
                        },
                    ],
                },
            ]
        }
    ]
}
const RouterJSX = <Router history={hashHistory} routes={ clientRootRoute } />

export default RouterJSX
export { clientRootRoute }