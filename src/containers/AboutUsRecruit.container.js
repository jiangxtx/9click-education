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

const recreitItemList = [
    {
        name: '营销总监',
        duty: '岗位职责：',
        dutyList: [
            '1、 参与制订公司营销战略。根据营销战略制订公司营销组合策略和营销计划，制定并组织实施完整的销售方案；',
            '2、 引导和控制市场销售工作的方向和进度，与客户、同行业间建立良好的合作关系；',
            '3、 熟悉多种教育市场模式，能够分析、开发市场信息，正确判断营销环境，提出合理的市场计划；',
            '4、 定期对市场营销环境、目标、计划、业务活动进行核查分析，及时调整营销策略和计划，制订预防和纠正措施，确保完成销售目标和营销计划；',
            '5、 组织大区开发多种销售手段，完成销售计划及回款任务；',
            '6、 负责重大营销合同的谈判与签订；',
            '7、与相关政府机构、重要客户群等建立及保持良好的人脉关系。'
        ],
        demand: '任职要求：',
        demandList: [
            '1、 大专以上学历，3年以上同等职位管理经验，对教育培训行业市场比较了解；',
            '2、 优秀的营销技巧，较强的市场策划能力和运作能力；',
            '3、 良好团队精神、沟通技巧和语言表达能力，思维清晰，反应敏捷，工作认真细致，积极进取，善于学习与创新；',
            '4、 英语及计算机运用熟练，有一定财务知识；',
            '5、有教育培训行业经验优先考虑。'
        ]
    },
    {
        name: '市场营销',
        duty: '岗位职责：',
        dutyList: [
            '1、负责整理客户资料；',
            '2、接受客户订单，制作销售订单，并与财务对接；',
            '3、负责联络沟通客户；',
            '4、做好销售的后台支持；',
            '5、相关的销售协议、合同等存档管理；',
            '6、关注各地政府采购相关内容。'
        ],
        demand: '任职要求：',
        demandList: [
            '1、大专及以上学历，英语4级；',
            '2、2年以上商务相关领域工作经验；',
            '3、有商务推广、策划方面的经验；',
            '4、英语及计算机运用熟练，有一定财务知识；',
            '5、良好的语言表达及较强的沟通能力，工作认真细致，积极进取，善于学习与创新。'
        ]
    }
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
                <ShowTitle title="招贤纳士"/>

                <div className="recruit">
                    { recreitItemList.map((item, idx) => (
                        <Row key={idx}>
                            <div className="name">{item.name}</div>
                            <div>{item.duty}</div>
                            <ul>
                                {item.dutyList.map((cItem, cidx) => (
                                    <li key={cidx}>{cItem}</li>
                                ))}
                            </ul>
                            <div>{item.demand}</div>
                            <ul>
                                {item.demandList.map((cItem, cidx) => (
                                    <li key={cidx}>{cItem}</li>
                                ))}
                            </ul>
                        </Row>
                    )) }
                </div>
            </div>
        )
    }
}