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

import CoopOutdoor from '../img/aboutus/coop-outdoor.jpg'
import c20mooc from '../img/aboutus/c20mooc.png'
import mooc from '../img/aboutus/mooc.png'
import c20steam from '../img/aboutus/c20steam.png'
import exam from '../img/aboutus/exam.png'
import research from '../img/aboutus/research.png'

const partnerItemList = [
    {
        img: c20mooc,
        descp: '由全国高中、初中、小学各20余所学校共同参与，致力于通过创建优质教学微视频，实现优质教育教学资源共享，推动中国基础教育课堂教学改革的研究性组织。上海智而仁奇点研修院是其组织者与秘书长单位。'
    },
    {
        img: mooc,
        descp: '华东师范大学慕课中心成立于2013年9月。她是以研究与开发基础教育、教师教育“慕课（大规模在线开放课程）”，并推动慕课在各领域高质量地得到实施的学术性组织。上海智而仁奇点研修院是其合作伙伴。'
    },
    {
        img: c20steam,
        descp: '2016年智而仁联合55家知名中学成立，旨在满推动学校利用现代信息技术进行教与学方式变革，促进学生的主动学习和深度学习，培养学生的创造性思维、动手实践能力。上海智而仁奇点研修院其组织者和秘书长单位。'
    },
    {img: exam, descp: '华东师范大学考试与评价研究院是华东师范大学的实体性研究机构，主要从事教育质量标准与评价方案的科学研究，同时为教育行政部门和中小学校提供教育评价专业服务。上海智而仁奇点研修院是其合作伙伴。'},
    {
        img: research,
        descp: '2016年上海市中学生研究性学习学术指导委员会在上海智而仁奇点研修院成立。委员会致力于推进上海各校研究性学习，着力培养学生创新精神和实践能力。上海智而仁奇点研修院是其组织者和秘书长单位。'
    },
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
                    <ShowTitle title="合作伙伴"/>

                    <div className="partner">
                        {partnerItemList.map((item, key) => (
                            <Row className="partner-row">
                                <Col lg={4} md={3} sm={6} >
                                    <div className="parter-imgwrap">
                                        <img src={ item.img } className="partner-img" alt=""/>
                                    </div>
                                </Col>
                                <Col lg={8} md={9} sm={6}>
                                    {item.descp}
                                </Col>
                            </Row>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}