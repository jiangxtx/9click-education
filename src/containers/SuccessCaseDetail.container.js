/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Spin } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'
import TitleWithGradient from '../components/TitleWithGradientBackcolor'
import Breadcrumb from '../components/BreadCrumb'
import { custom_fetch } from '../Tool/fetchConfig'

import '../css/containers/success-case.less'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: true,
            caseDetailInfo: {},
        }

    }

    componentDidMount() {
        const { cid } = this.props.params;
        const url = `/news/${cid}`
        custom_fetch.get(url, json => {
            this.setState({
                isFetching: false,
                caseDetailInfo: json.data || {},
            })
        })
    }

    render() {
        const { isFetching, caseDetailInfo } = this.state;
        const { _id, describeThePicture, digest, meta={}, title, content, createTime } = caseDetailInfo;
        const publishDate = meta.updateAt && (new Date(meta.updateAt)).toLocaleDateString() ||  '---'

        const crumbData = [
            { name: '成功案例', link: '/case' },
            { name: title, link: null },
        ]

        return (
            <Spin spinning={ isFetching }>
                <div className="case">
                    {/* 面包屑导航 */}
                    <Breadcrumb crumbData={ crumbData } />

                    <div className="case-detail">
                        <div className="case-detail-title">{ title }</div>
                        <div className="case-detail-publishTime">发布时间：{ publishDate }</div>
                        <div className="case-detail-content" dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
            </Spin>
        )
    }
}