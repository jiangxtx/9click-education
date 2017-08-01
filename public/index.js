import React from 'react'
import ReactDom from 'react-dom'
import route from '../src/routes/route'

ReactDom.render(
    <div className="bodyFont">
        {route}
    </div>
    ,
    document.getElementById('root')
)