// Provide custom regenerator runtime and core-js
require('babel-polyfill')

// Node babel source map support
require('source-map-support').install()

// Javascript require hook
require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
})

// Css require hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// Image require hook
require('asset-require-hook')({
    name: '/[hash].[ext]',
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
})

// public 3th libs
const convert = require('koa-convert'),
    webpack = require('webpack'),
    fs = require('fs'),
    path = require('path'),
    devMiddleware = require('koa-webpack-dev-middleware'),
    hotMiddleware = require('koa-webpack-hot-middleware'),
    views = require('koa-views'),
    port = process.env.port || 5498;


const app = require('./app.js') // 服务端渲染时，整个程序的入口.
const router = require('./routes')  // 服务端 API.

const clientRoute = require('./middlewares/clientRoute')
const config = require('../build/webpack.dev.config');
const compiler = webpack(config)

// Webpack hook event to write html file into `/views/dev` from `/views/template` due to server render
compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data;

    Object.keys(assets).forEach(key => {
        if (key.match(/\.html$/)) {
            file = path.resolve(__dirname, key)
            data = assets[key].source()
            fs.writeFileSync(file, data)
        }
    })
    callback()
})

app.use(views(path.resolve(__dirname, '../views/dev'), { map: { html: 'ejs' }}))
app.use(clientRoute)  // 客户端路由配置.
app.use(router.routes())  // 服务端的请求路由 API 等.
app.use(router.allowedMethods())

console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)

app.use(convert(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compiler)))
app.listen(port)
