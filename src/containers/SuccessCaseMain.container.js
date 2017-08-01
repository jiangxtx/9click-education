/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Spin } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'
import TitleWithGradient from '../components/TitleWithGradientBackcolor'
import { custom_fetch, FETCH_URL } from '../Tool/fetchConfig'
import { PaginateMid } from '../components/AntdWrapComponent'

import '../css/containers/success-case.scss'

const pageSize = 5;

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: true,
            caseInfoList: [],
            total: 0,

            currentPage: 1,
        }

        this.learnMore = this.learnMore.bind(this)
        this.queryNewsList = this.queryNewsList.bind(this)
        this.onPageChange = this.onPageChange.bind(this)
    }

    learnMore(e, cid) {
        e.preventDefault();
        // alert('learn more about ID for : ' + cid)
        this.context.router.push(`/case/detail/${cid}`)
        return false;
    }

    onPageChange(page) {
        // console.log('onPageChange: ', page)
        this.setState({
            currentPage: page,
        }, () => this.queryNewsList() )
    }

    queryNewsList() {
        const { currentPage } = this.state;

        this.setState({
            isFetching: true,
        })
        const url = `/news/types/simple?page=${currentPage}&size=${pageSize}`;
        custom_fetch.get(url, json => {
            const caseInfoList = json.data || [];
            this.setState({
                caseInfoList,
                total: json.total || 0,
                isFetching: false,
            })
        })
    }

    componentDidMount() {
        this.queryNewsList()
    }

    render() {
        const { caseInfoList, total, currentPage, isFetching } = this.state;

        return (
            <Spin spinning={ isFetching }>
                <TitleWithGradient title="成功案例" />

                <Row className="">
                    <Col span={12}>
                        { caseInfoList.map((item, idx) => (
                            <div className="case-item" key={idx}>
                                <Row>
                                    <Col lg={4} sm={6} className="case-item-img">
                                        <img className="img-control" src={ FETCH_URL + item.describeThePicture } alt=""/>
                                    </Col>
                                    <Col lg={8} sm={6}>
                                        <div className="case-item-title">
                                            <a href="void(0)" onClick={ (e) => this.learnMore(e, item._id)}>{ item.title }</a>
                                        </div>
                                        <p className="case-item-abstract">{ item.digest }</p>
                                        <div className="case-item-more">
                                            <a href="void(0)" onClick={ (e) => this.learnMore(e, item._id)}>了解更多》</a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )) }

                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <PaginateMid
                            total={ total }
                            currentPage={ currentPage }
                            pageSize={ pageSize }
                            pageChange={ this.onPageChange }
                        />
                    </Col>
                </Row>
            </Spin>

        )
    }
}
Main.contextTypes = {
    router: React.PropTypes.object.isRequired,
}