/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Anchor } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'
import NavbarMenu from '../components/NavbarMenu'
import { aboutUsList } from '../Config/proj-config'

import banner_1 from '../img/aboutus/about-banner-1.jpg'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentKey: '0',
        };

    }

    render() {

        return (
            <Container>
                <Row className="">
                    <Col lg={10} md={10} sm={9} >
                        <h1>PAGE NOT FOUND: 404!!</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}