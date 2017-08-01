/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Modal } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'

import '../css/containers/student-education.scss'

import advantage_img from '../img/stud-educ/study-3advantages.jpg'
import prodFunction_img from '../img/stud-educ/study-prodFunction.jpg'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const studyInfoList = [
            {
                title: '一、产品简介',
                content: (
                    <p><a href="http://www.c20steam.com" target="_blank">奇点研究性学习平台</a> 是一款支持学生在线开展研究性学习的教学管理平台，主要用于解决当前许多学校组织学生开展研究性学习
                        所遇到的资源不足、管理困难、师资缺乏、评价滞后、教法低效等问题。
                        平台功能设计和课程内容全面体现 “探究性”、“综合性”和“实践性”的教学理念和模式，为教师和学生开展研究性学习提供支持和保障。</p>
                )
            }, {
                title: '二、产品优势',
                content: (
                    <div className="advantage">
                        <img src={ advantage_img } alt=""/>
                    </div>
                )
            }, {
                title: '三、产品价值',
                content: (
                    <div className="value">
                        <p className="prod-value" style={{ borderTop: `40px solid #4ECDF8` }}>
                            <div className="prod-value-descp">
                                解决学校研究性学习的组织及效率问题，为学生提供发现问题与解决问题的支持和保障，培育创新素养。
                            </div>
                        </p>
                        <p className="prod-value" style={{ borderTop: `40px solid #17CCDD`, marginLeft: '4%' }}>
                            <div className="prod-value-descp">
                                高度整合的创新课程，弥补学校单科教学的不足，打通学科间内在联系，激发学生的学习兴趣，实现对问题的整合性研究。
                            </div>
                        </p>
                        <p className="prod-value" style={{ borderTop: `40px solid #466DA6`, marginLeft: '8%' }}>
                            <div className="prod-value-descp">
                                注重实践性和应用性，关注社会生活，立足运用，有利于学生将所学知识运用到日常实践之中。
                            </div>
                        </p>
                        <p className="prod-value" style={{ borderTop: `40px solid #FC7D90`, marginLeft: '12%' }}>
                            <div className="prod-value-descp">
                                客观记录学生研究性学习数据，进行个性化分析与评价，提供针对性教学辅导，促进学生综合素质发展。
                            </div>
                        </p>
                    </div>
                )
            }, {
                title: '四、产品功能',
                content: (
                    <div className="function">
                        <div className="funtion-title">学生怎么学？教师怎么教？学校怎么管？</div>
                        <img src={ prodFunction_img } alt=""/>
                    </div>
                )
            }
        ]

        return (
            <div className="studEduc-study">
                { studyInfoList.map((item, idx) => (
                    <div key={idx} className="studyItem">
                        <div className="item-title">{ item.title }</div>
                        <div className="item-content">{ item.content }</div>
                    </div>
                ))}

            </div>
        )
    }
}