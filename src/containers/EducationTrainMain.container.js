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

import method_l from '../img/train/train-method-l.jpg'
import method_m from '../img/train/train-method-m.jpg'
import method_r from '../img/train/train-method-r.jpg'

import No1_blue from '../img/train/No1_blue.jpg'
import No2_blue from '../img/train/No2_blue.jpg'
import No3_blue from '../img/train/No3_blue.jpg'
import No4_blue from '../img/train/No4_blue.jpg'
import No1_green from '../img/train/No1_green.jpg'
import No2_green from '../img/train/No2_green.jpg'
import No3_green from '../img/train/No3_green.jpg'
import No4_green from '../img/train/No4_green.png'


const trainInfoList = [
    {
        id: 1,
        title: '数字化时代基础教育课堂教学变革',
        subtitle: '最前沿的理论、最实用的课程',
        list: [
            { content: '充分感悟信息化时代教学变革的意义和价值', num: No1_blue },
            { content: '学会微课设计与制作的技术', num: No2_blue },
            { content: '学会教学管理平台的使用', num: No3_blue },
            { content: '掌握课堂教学变革的思路与方法', num: No4_blue },
        ],
        initColor: '#1A659F',
        detailFlag: true,
    }, {
        id: 2,
        title: '基础教育考试与评价',
        subtitle: '洞悉招生制度改革玄机，做好新形式下人才培养工作',
        list: [
            { content: '认清做好教育质量综合评价的重要意义', num: No1_green },
            { content: '掌握基本的考试命题方法与原理', num: No2_green },
            { content: '掌握问卷编制与分析技术', num: No3_green },
            { content: '掌握数据挖掘和报告撰写要领', num: No4_green },
        ],
        initColor: '#36AE71',
        detailFlag: true,
    }, {
        id: 3,
        title: '聚焦新高考',
        subtitle: '先一步把握改革方向，早一日实现跨越发展',
        list: [
            { content: '深入了解高考改革新政策和改革方案', num: No1_blue },
            { content: '了解学校育人新模式', num: No2_blue },
            { content: '把握高中课程评价体系和改革趋势', num: No3_blue },
            { content: '学习优秀学校开展转型工作的宝贵经验', num: No4_blue },
        ],
        initColor: '#1A659F',
        detailFlag: false,
    }, {
        id: 4,
        title: '中小学校长领导力提升',
        subtitle: '促进领导力的现代化，推动向教育家转型',
        list: [
            { content: '了解全国各中小学、中高职校教育改革和发展新趋势', num: No1_green },
            { content: '了解信息技术在教学和管理上的应用', num: No2_green },
            { content: '学习优秀学校建设理念及办学成果', num: No3_green },
            { content: '提升规划学校发展、引领学校变革和实施管理的能力', num: No4_green },
        ],
        initColor: '#36AE71',
        detailFlag: false,
    }, {
        id: 5,
        title: '骨干教师能力提升',
        subtitle: '打造过硬师资队伍，促进学校内涵发展',
        list: [
            { content: '了解中小学教育改革和发展新趋势', num: No1_blue },
            { content: '学习中小学教育改革及其评价的新理念和新方法', num: No2_blue },
            { content: '提高教学技能，形成教学风格', num: No3_blue },
            { content: '掌握和运用教科研前沿的成果', num: No4_blue },
        ],
        initColor: '#1A659F',
        detailFlag: false,
    }
];


export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <EducationTrainInfo trainInfoList={ trainInfoList } />

                <div className="trainMetohd-wrap">
                    <img src={ method_l } alt="" className="method-img-l" />
                    <img src={ method_m } alt="" className="method-img-m" />
                    <img src={ method_r } alt="" className="method-img-r" />
                </div>
            </div>
        )
    }
}