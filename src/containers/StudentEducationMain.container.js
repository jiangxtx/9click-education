/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Modal } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'

import ShowTitle from '../components/TitleWithGradientBackcolor'
import '../css/containers/student-education.less'

import { studEducList } from '../Config/proj-config'
import t3Dprint from '../img/stud-educ/3Dprint.jpg'
import robot_l from '../img/stud-educ/robot-l.jpg'
import robot_m from '../img/stud-educ/robot-m.jpg'
import robot_r from '../img/stud-educ/robot-r.jpg'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="studEduc">
                <div className="educ-item">
                    <ShowTitle title="智能机器人" initColor="#1A659F" />
                    <div className="itemTitle">走进Robot的奇幻世界，见证“从无到有”的华丽蜕变</div>
                    <div className="robot-wrap">
                        <img src={ robot_l } alt="" className="robot-img-l" />
                        <img src={ robot_m } alt="" className="robot-img-m" />
                        <img src={ robot_r } alt="" className="robot-img-r" />
                        <p className="descp-l">智能机器人课程以Arduino为开发平台，选择C语言作为程序语言，通过基于Arduino智能小车的组装、功能调试与拓展，
                            选择C语言控制传感器、电机等基础的智能硬件编程方法和原理，提升学生的程序编写能力，
                            学生在动手组装的过程中发展动手实践能力与小组合作能力。</p>
                        <p className="descp-r">同时在课程中设置学习者作品的说明展示、视频展示等环节，在展示学习成果的同时，提升学生的表达能力、报告能力。</p>
                    </div>
                </div>

                <div className="educ-item">
                    <ShowTitle title="3D打印" initColor="#D4CE5C" />
                    <div className="itemTitle">将虚拟变为现实，让创意触手可及</div>

                    <p>3D打印课程可以给学生的“学习方式”带来全新体验，通过创意性的实践活动，让抽象的概念更加容易理解，
                        激发学生对科学、数学尤其是工程和设计创意的兴趣，带来理论与实践、知识与思维、现实与未来三方面的有机结合。
                        学生在学生过程中学会思考、创造与合作，培养学生的创新思维能力和动手实践能力，满足学生个性化发展的需求。</p>
                    <div className="print-img">
                        <img src={ t3Dprint } alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}