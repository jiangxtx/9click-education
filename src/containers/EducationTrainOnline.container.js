/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Button } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'
import EducationTrainInfo from '../components/EducationTrainInfo'
import NavbarMenu from '../components/NavbarMenu'
import { trainList } from '../Config/proj-config'

import './education-train.less'

import advantages_img from '../img/train/5advantages.jpg'



export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const funcionArr = [
            { title: '课程学习', content: '学员可以根据自身情况各取所需，满足个性化的学习需求。' },
            { title: '课程管理', content: '学员可轻松创建和上传学习课件，形式包括视频、材料、习题等。' },
            { title: '作业管理', content: '管理员可以统一发布作业任务，并可进行审阅和给予反馈意见。' },
            { title: '交流社区', content: '在线辅导答疑采用任务管理方式，学员间交流互动形式多样。' },
            { title: '数据统计', content: '多角度、多维度的数据统计，支持用户自定义统计和数据挖掘。' }
        ]

        const onlineInfoList = [
            { title: '一、产品简介', content: (
                <p className="online-content">
                    <a href="http://www.c20steam.cn" target="_blank">奇点中小学师训在线</a> 依据数字化时代背景下教师培训的特点，定制开发的基于计算机互联网的教与学支撑平台。
                    平台顶层设计严谨，功能完善，既服务于教育行政部门及学校，又有服务于教师的在线学习、作业管理，突出交互性、自主性和个性化特点，
                    实现“在线学习—线上作业—线下实践”完美结合，完全能够满足当前环境下的教师教育培训需求。</p>
            )}, { title: '二、五大优势', content: (
                <div className="online-content">
                    <img src={ advantages_img } alt=""/>
                </div>
            )}, { title: '三、功能', content: (
                <div className="online-content" style={{ textAlign: 'center' }}>
                    { funcionArr.map((item, idx) => (
                        <div className="online-func" key={idx}>
                            <div className="func-title">
                                <span className="func-title-no">{ idx + 1}.</span>
                                { item.title }
                                </div>
                            <p className="func-descp">{ item.content }</p>
                        </div>
                    )) }
                </div>
            )},
        ]

        return (
            <div className="online">
                { onlineInfoList.map((item, idx) => (
                    <div className="online-item" key={idx}>
                        <div className="title">{ item.title }</div>
                        <div className="content">{ item.content }</div>
                    </div>
                ))}
            </div>
        )
    }
}