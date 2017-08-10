/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React, {Component} from 'react'
import {Modal} from 'antd'
import {Container, ContainerFluid, Row, Col} from '../layout'
import NavbarMenu from '../components/NavbarMenu'

import ShowTitle from '../components/TitleWithGradientBackcolor'
import '../css/containers/about-us.less'

import CoopLocation from '../img/aboutus/coop-location.jpg'
import QRcode from '../img/home/QRcode.png'

const teamShowList = [
    [{title: '联系地址:', descp: '上海市普陀区华东师大科技园金沙江路1006号12层（地铁13号线大渡河路4号口）'}],
    [{title: '邮政编码:', descp: '200235'}, {title: '公司电话:', descp: '021-62687637（转241）'}],
    [{title: '电子邮件:', descp: 'c20public@cz2r.com'}]
]

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log('home didMount props', this.props)
    }

    render() {
        return (
            <div className="aboutUs">
                <div className="about-item">
                    <ShowTitle title="联系我们"/>

                    <Row>
                        <Col span={12} >
                            <div className="top-img">
                                <img src={ CoopLocation } alt=""/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            {teamShowList.map((item, idx) => (
                                <div key={idx} className="info-row">
                                    {item.map((cItem, cIdx) => (
                                        <span className="info-block" key={cIdx}><span
                                            className="info-title">{cItem.title}</span>{cItem.descp}</span>
                                    ))}
                                </div>
                            ))}
                        </Col>
                        <Col lg={4}>
                            <div className="QRcode">
                                <img src={ QRcode } alt="" className="QRcode-img"/>
                                <div className="QRcode-descr">奇点研修院二维码</div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}