/**
 * Created by Jiangxtx on 2017/8/4-16:50.
 * Description:
 *  运行：webpack test-src.js test-bundle.js.
 *      生成打包后的 js 文件。
 *
 *  非模块化的文件被模块化打包工具支持，本来就是一件很神奇的事情。至于初衷，我也只能想到是为了让开发者能更低成本地迁移到webpack上来。
 *
 *  整体上看，文件被分为两个部分：第一个块函数定义，这也就是官方文档中提到的Runtime，作用是保证模块的顺利加载和运行。
 *  第二块则是我们原来写的JS文件，只是被包裹了一个函数，也就是模块。运行的时候模块是作为Runtime的参数被传进去的，也就是这样的形式：
 *      (function(modules){
            // Runtime
        })([
            // 模块数组
        ])
 */

alert('Hello Jiangxtx, welcome to Earth!!!');
