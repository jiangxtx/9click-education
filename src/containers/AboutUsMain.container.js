/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React, {Component} from 'react'
import { Anchor } from 'antd'
import {Container, ContainerFluid, Row, Col} from '../layout'
import NavbarMenu from '../components/NavbarMenu'
import ShowTitle from '../components/TitleWithGradientBackcolor'
import '../css/containers/about-us.scss'

import CoopOutdoor from '../img/aboutus/coop-outdoor.jpg'

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
                    <ShowTitle title="关于奇点"/>

                    <p>
                        上海智而仁奇点研修院是C20慕课联盟（地市教育局、高中、初中、小学）的组织者和秘书长单位、
                        C20STEAM创新课程实验共同体的理事长与秘书长单位、上海市中学生研究性学习学术指导委员会的组织者和秘书长单位。
                        研修院核心团队由知名学者陈玉琨教授领衔，其办学宗旨：将联盟单位的研究成果转化为服务于我国基础教育的力量，
                        致力于探索面向未来的基础教育人才培养模式，改善当前班级授课制背景下学生个性化学习问题，增强学生学习的自主性，
                        为提高学生综合素质和培养高层次拔尖人才做出贡献。研修院的核心业务为：针对数字化时代的课程建设，课堂教学模式变革，
                        学生综合素质评价，学校及区域管理改进等，组织面向校长、教师、教研员等各类人员的研修活动；以及“双创”背景下基于研究性学习，
                        开展形式多样的中小生创客教育。
                    </p>
                    <div className="print-img">
                        <img src={ CoopOutdoor } alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}