# 9click-education
“九点教育系统”，旨在通过该系统来学习 webpack 的 code-spliting 和 react 服务端渲染两大核心技术。

> 青少年就像是八九点钟的太阳，明亮而不耀眼，光芒而不炽烈。
> 九大板块的教育体系，助您成长的路上一臂之力。

## server 目录
> 基于 NodeJS+mongodb+express 搭建的 9click-education后台新闻管理以及相关接口服务端

### 技术栈
1. nodeJs 6.0+
2. mongodb 3.0+
3. express
4. ejs
5. restful

### 运行：
在项目所在目录根下，执行：

```shell
npm install
npm start
```

访问：localhost:5499
后台管理： localhost:5499/9clock-manage

### 参考资料
> http://expressjs.com/zh-cn/
https://cnodejs.org/topic/504b4924e2b84515770103dd

## 待解决问题

1. package-lock.json 文件的作用是什么？（2017-7-31 20:12）

2. 启动 npm run start 时，出现如下图错误，什么原因？（2017-7-31 20:49）
![mark](http://ojjslhnls.bkt.clouddn.com/blog/20170731/204804467.png)

## 打包

没有配置 css 打包的情形：

![mark](http://ojjslhnls.bkt.clouddn.com/blog/20170802/183722039.png)

配置了 css 单独打包的效果：
```javascript
{
    test: /\.css$/,
    // loader: 'style-loader!css-loader',
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
}
```
![mark](http://ojjslhnls.bkt.clouddn.com/blog/20170802/185515208.png)

## git 分支：sevrender

用于呈现服务端渲染的代码托管。
