// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function (dependencies, callback) {
        callback(require)
    }
}

 const mock_server_route = {
    childRoutes: [
        {
            path: '/',
            component: require('../containers/MockPage.container').default,
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('../containers/MockPage.container').default)
                }, 'home')
            },
        }
    ]
}

export default mock_server_route