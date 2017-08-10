/**
 * Created by Jiangxtx on 2017/7/11-11:32.
 * Description:
 */

import React ,{ Component, PropTypes } from 'react'
import { Pagination, notification } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../../layout'

import './index.less'

const showInform = (data) => {
    let type = data.type;
    if (['success', 'info', 'warning', 'error'].indexOf(data.type) > -1) {
        type = data.type;
    } else {
        type = (type) ? 'success' : 'error';
    }

    notification[type]({
        message: data.title || '默认消息',
        description: data.msg || '默认消息内容',
        duration: (data.duration != null) ? data.duration : 2.5,
    })
};

class PaginateMid extends Component {
    render() {
        const { total, currentPage, pageSize=10, pageChange } = this.props;
        // console.log('paginateMid: ',total, currentPage, pageSize)

        const paginationDOM = (total < 1) ? '' :
            (<div className="pagination-panel">
                <Pagination defaultCurrent={1} current={currentPage}
                            total={total} pageSize={pageSize}
                            onChange={ pageChange } />
            </div>)
        return (
            <div>
                { paginationDOM }
            </div>
        )
    }
}
PaginateMid.PropTypes = {
    total: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    pageChange: PropTypes.func.isRequired
}

export { showInform, PaginateMid }