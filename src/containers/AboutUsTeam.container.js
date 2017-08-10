/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React, {Component} from 'react'
import {Modal} from 'antd'
import {Container, ContainerFluid, Row, Col} from '../layout'
import NavbarMenu from '../components/NavbarMenu'
import ShowTitle from '../components/TitleWithGradientBackcolor'
import TeamNumberSlider from '../components/TeamNumberSlider'

import '../css/containers/about-us.less'

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
                    <ShowTitle title="团队展示"/>

                    <div className="team">
                        <TeamNumberSlider detailHeight="305px" from="aboutus" />
                    </div>
                </div>
            </div>
        )
    }
}