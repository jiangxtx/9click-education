/**
 * Created by Jiangxtx on 2017/7/12-16:05.
 * Description:
 */


function test2Change(val) {
    const a = val;
    const arr = ['women', 'man', '我们'];
    console.log('this is a wonderful world!!!!')
}

import React from 'react'
import ReactDom from 'react-dom'
import route from '../src/routes/route'

ReactDom.render(
    <div className="bodyFont">
        <h1>这是一个美好的 的 世界！</h1>
        <h3>This is a wonderful world!!!</h3>
    </div>
    ,
    document.getElementById('root')
)