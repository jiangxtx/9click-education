/**
 * Created by Jiangxtx on 2017/7/11-11:32.
 * Description:
 */

import React ,{ Component } from 'react'
import { Spin } from 'antd'
import Slider from 'react-slick'
import { Container, ContainerFluid, Row, Col } from '../../layout'
import { slider_setting } from '../../Config/proj-config'

import './index.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import team_1 from '../../img/home/teamshow-chenyk.png'
import team_2 from '../../img/home/teamshow-cuiyg.png'
import team_3 from '../../img/home/teamshow-wuzh.png'
import team_4 from '../../img/home/teamshow-tianal.png'

const teamShowList = [
    { id: 1, name: '陈玉琨', img: team_1, descp: '华东师范大学考试与评价研究院院长，华东师范大学首批终身教授、博士生导师、校务委员会副主任。曾任华东师范大学公共管理学院院长、教育部中学校长培训中心主任，兼任国务院学位委员会公共管理学科评议组成员、国家督学、全国教育干部培训专家委员会主任委员、《华东师范大学学报（教育科学版）》主编等。' },
    { id: 2, name: '韩映雄', img: team_2, descp: '博士，华东师范大学教授，考试与评价研究院副院长，美国哥伦比亚大学访问学者，中国高教学会高等教育学专业委员会理事，上海市浦江人才计划入选者（2012年）。曾任上海终身教育研究院学术部主任。' },
    { id: 3, name: '吴志鋐', img: team_3, descp: '博士，华东师范大学教授、博士生导师。曾任教育部中学校长培训中心书记，华东师范大学教育管理学院副院长、总支书记，兼任中国教育管理学科教学专业委员会副理事长、中国教育管理学会常务理事。' },
    { id: 4, name: '田爱丽', img: team_4, descp: '博士，华东师范大学副教授、硕士生导师，现任华东师范大学慕课中心副主任。曾任教育部中学校长培训中心培训部主任，华东师范大学中外名校研究中心主任。' },
]

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { detailHeight='240px',from } = this.props;
        const setting = Object.assign({}, slider_setting);

        if (from === 'aboutus') {
            return (
                <Row className="teamNumberSlider">
                    { teamShowList.map((item, idx) => (
                        <Col lg={3} md={3} sm={6} key={idx} >
                            <div className={`team-item ${from}`}>
                                <img src={ item.img } alt="团队展示"/>
                                <div className="detail" style={{ height: detailHeight }}>
                                    <span className="itemName">{ item.name }</span>
                                    <span className="itemDescp">{ item.descp }</span>
                                </div>
                            </div>
                        </Col>
                    )) }
                </Row>
            )
        }

        // 给首页的团队展示之用
        return (
            <Row className="teamNumberSlider">
                <Col span={12}>
                    <Slider {...setting}>
                        { teamShowList.map((item, idx) => (
                            <div className="team-itemwrap">
                                <div className="team-item" key={ item.id + ''}>
                                    <img src={ item.img } alt="团队展示"/>
                                    <div className="detail" style={{ height: detailHeight }}>
                                        <span className="itemName">{ item.name }</span>
                                        <span className="itemDescp">{ item.descp }</span>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </Slider>
                </Col>
            </Row>
        )


    }
}
Main.PropTypes = {
    detailHeight: React.PropTypes.string,
}