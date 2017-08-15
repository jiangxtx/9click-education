/**
 * Created by Jiangxtx on 2017/8/14-19:23.
 * Description:
 *      服务端引用的客户端路由配置；
 *      服务端渲染时，浏览器中访问路由配置，相当于是一种通用的范式写法。
 */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'

import { clientRootRoute } from '../../src/routes/route-splitCode'
import mock_server_route from '../../src/routes/route-for-server-render'

// 模拟服务端的 react-redux 数据
const store = {
    type: 'server-render-store',
    mockData: {
        name: 'jiangxtx',
        age: 27,
        city: ['China', 'Shanghai']
    }
}

async function clientRoute(ctx, next) {
    let _renderProps;

    match({ routes: mock_server_route, location: ctx.url }, (error, redirectLocation, renderProps) => {
        _renderProps = renderProps
    })

    if (_renderProps) {
        await ctx.render('index', {
            root: renderToString(
                <RouterContext {..._renderProps} />
            ),
            state: store,  // 服务端获取状态树传递到客户端，并同步到初始化状态，然后整个页面被客户端接管.
        })
    } else {
        await next()
    }
}

export default clientRoute