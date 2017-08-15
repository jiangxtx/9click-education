/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Anchor } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'

import banner_1 from '../img/aboutus/about-banner-1.jpg'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentKey: '0',
        };

    }

    render() {
        const { currentKey } = this.state;

        return (
            <div>
                <img src={ banner_1 } className="banner" alt=""/>

                <Container>
                    <Row className="">
                        <Col lg={2} md={2} sm={3} className="">
                            <h5>我是模拟服务端渲染的页面~~~</h5>
                        </Col>

                        <Col lg={10} md={10} sm={9} >
                            <h2>我是模拟服务端渲染的页面~~~</h2>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}