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

        this.judgeCurrentKey = this.judgeCurrentKey.bind(this)
    }

    componentDidMount() {
        // console.log('home didMount props', this.props)
        this.judgeCurrentKey()
    }

    componentWillReceiveProps(nextProps) {
        this.judgeCurrentKey()
    }

    judgeCurrentKey() {
        // console.log('Header -> hash: ', hash, currentKey, currentItem)
        const { hash } = window.location;
        const routeMatchArr = hash.match(/#(\S*)\?/);
        const routeStr = routeMatchArr && routeMatchArr[1] || '';
        const routeArr = routeStr.split('/').filter(item => !!item);
        const currentItem = aboutUsList.find(item => item.link.indexOf(routeArr[1]) > -1) || {};
        const currentKey = currentItem.key || '0';

        this.setState({
            currentKey,
        })
    }

    render() {
        const { currentKey } = this.state;

        return (
            <div>
                <img src={ banner_1 } className="banner" alt=""/>

                <Container>
                    <Row className="">
                        <Col lg={2} md={2} sm={3} className="">
                            <Anchor>
                                <div className="aboutusNav">
                                    <NavbarMenu navbarList={ aboutUsList } currentKey={ currentKey } mode="vertical" />
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