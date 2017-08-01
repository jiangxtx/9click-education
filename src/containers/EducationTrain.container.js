/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Anchor } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'
import NavbarMenu from '../components/NavbarMenu'
import { trainList } from '../Config/proj-config'

import './education-train.scss'

import banner_1 from '../img/train/train-banner-1.jpg'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <img src={ banner_1 } className="banner" alt=""/>

                <Container>
                    <Row className="">
                        <Col lg={2} md={2} sm={3} className="">
                            <Anchor>
                                <div className="trainNav">
                                    <NavbarMenu navbarList={ trainList } mode="vertical" />
                                </div>
                            </Anchor>
                        </Col>

                        <Col lg={10} md={10} sm={9} >
                            { this.props.children }
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}