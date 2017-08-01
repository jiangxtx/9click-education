import React from 'react'
import ReactDom from 'react-dom'
// import route from '../src/routes/route'  // route that whole codes in one-js file.
import route from '../src/routes/route-splitCode'   // code-spliting route.

ReactDom.render(
    <div className="bodyFont">
        {route}
    </div>
    ,
    document.getElementById('root')
)