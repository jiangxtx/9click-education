/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Modal } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'
import TitleWithGradient from '../components/TitleWithGradientBackcolor'

import '../css/containers/success-case.less'

import banner_1 from '../img/case/case-banner-1.jpg'
import cover_1 from '../img/case/case-cover-1.jpg'
import cover_2 from '../img/case/case-cover-2.jpg'
import cover_3 from '../img/case/case-cover-3.jpg'
import cover_4 from '../img/case/case-cover-4.jpg'
import cover_5 from '../img/case/case-cover-5.jpg'

export default class Main extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="case">
                <img src={ banner_1 } className="banner" alt=""/>

                <Container>
                    { this.props.children }
                </Container>
            </div>

        )
    }
}