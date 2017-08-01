/**
 * Created by Jiangxtx on 2017/7/11-11:32.
 * Description:
 */

import React ,{ Component } from 'react'
import { Spin, Icon } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../../layout'
import TitleWithGradient from '../TitleWithGradientBackcolor'

import './index.scss'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.enterDetail = this.enterDetail.bind(this)
    }

    enterDetail(e, id) {
        e.preventDefault();
        this.context.router.push(`/train/detail/${id}`)
    }

    componentDidMount() {
    }

    render() {
        const { trainInfoList } = this.props;

        return (
            <div>
                { trainInfoList && trainInfoList.map((item, idx) => (
                    <div className="train-item" key={idx}>
                        <TitleWithGradient title={ item.title } initColor={ item.initColor } />
                        { !!item.detailFlag &&
                            <a style={{ color: item.initColor }}
                               className="train-btn"
                               onClick={ (e) => this.enterDetail(e, item.id) }
                            >了解更多<Icon type="double-right" /></a>
                        }

                        <h5 className="trainSubtitle">{ item.subtitle }</h5>
                        <Row className="train-content">
                            { item.list.map((litem, lidx) => (
                                <Col lg={6} md={6} sm={12}
                                     className="train-list"
                                     key={lidx}>
                                    <img src={ litem.num } className="train-num" alt=""/>
                                    { litem.content }
                                </Col>
                            )) }
                        </Row>
                    </div>
                )) }
            </div>
        )
    }
}
Main.contextTypes = {
    router: React.PropTypes.object,
}