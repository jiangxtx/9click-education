import '../../css/home/home.less'

import React ,{Component}from 'react'
import Slider from 'react-slick'
import { Container, Row, Col } from '../../layout'
import TeamNumberSlider from '../../components/TeamNumberSlider'
import { slider_setting } from '../../Config/proj-config'

var homeBanner1 = require('../../img/home/banner-1.png');

var singluarDescp = require('../../img/home/singular-descp.jpg');
var study_1 = require('../../img/home/studyContent-1.png');
var study_2 = require('../../img/home/studyContent-2.png');
var study_3 = require('../../img/home/studyContent-3.png');
var unit_1 = require('../../img/home/unit-1.png');
var unit_2 = require('../../img/home/unit-2.png');
var unit_3 = require('../../img/home/unit-3.png');
var unit_4 = require('../../img/home/unit-4.png');
var unit_5 = require('../../img/home/unit-5.png');


const studyContentList = [
    { img: study_1, content: (
        <div className="studyContent">
            <p>提升学员的信息化素养和专业能力</p>
            <p>完善学校评价体系和提升学校办学质量</p>
            <p>提升区域教育竞争力</p>
        </div>
    )}, { img: study_2, content: (
        <div className="studyContent">
            <p>数字化时代的课程建设</p>
            <p>课堂教学模式变革</p>
            <p>学生综合素质评价</p>
            <p>学校及区域管理改进</p>
            <p>中小学研究性学习的实施</p>
            <p>聚焦新高考</p>
        </div>
    )}, { img: study_3, content: (
        <div className="studyContent">
            <p>教师</p>
            <p>校长</p>
            <p>教研员</p>
            <p>学生</p>
        </div>
    )}
]

const serviceList = [
    { title: '引领趋势的前沿研究', content: (
        <div className="serviceContent">
            <p>数字化背景下人才培养模式研究</p>
            <p>数字化背景下学校考试与评价改革研究</p>
            <p>学生研究性学习课程标准研究</p>
        </div>
    )}, { title: '丰富的专业资源', content: (
        <div className="serviceContent">
            <p>资深的专家队伍</p>
            <p>菜单式的课程体系</p>
            <p>精致的管理服务</p>
            <p>便捷高效的技术平台</p>
        </div>
    )}, { title: '多样化解决方案', content: (
        <div className="serviceContent">
            <p>完全的在线培训</p>
            <p>线上线下结合的培训</p>
            <p>面对面的线下培训</p>
        </div>
    )}
]

const unitList = [
    { title: '慕课联盟', icon: unit_1 },
    { title: '华师慕课', icon: unit_2 },
    { title: 'STEAM', icon: unit_3 },
    { title: '考试与评价研究院', icon: unit_4 },
    { title: '上海市中学生研究性学习学术指导委员会', icon: unit_5 },
]



class Main extends Component {
    constructor(props) {
        super(props)

        this.enterCoopunitDetail = this.enterCoopunitDetail.bind(this)
    }
    componentDidMount(){
        // console.log('home didMount props', this.props)
    }

    enterCoopunitDetail() {
        this.context.router.push(`/about/partner`)
    }

    render() {
        const setting = Object.assign({}, slider_setting, {
            slidesToShow: 1,
            /*fade: true,*/
        });

        return (
            <div className="home">
                <div className="carousel">
                    <Slider {...setting}>
                        <div className="carousel-img">
                            <img src={ homeBanner1 } className="home-banner-img" alt=""/>
                        </div>
                    </Slider>
                </div>


                <Container>
                    <h1 className="home-title">奇点简介</h1>

                    <Row className="singular">
                        <Col lg={6} className="img">
                            <img src={ singluarDescp } alt="" style={{ width: 'initial' }}/>
                        </Col>
                        <Col lg={6}>
                            <p className="singular-descp">
                                上海智而仁奇点研修院是C20慕课联盟（地市教育局、高中、初中、小学）的组织者和秘书长单位、C20STEAM创新课程实验
                                共同体的理事长与秘书长单位。
                            </p>
                            <p className="singular-descp">
                                <strong>办学宗旨：</strong>将联盟单位的研究成果转化为服务于我国基础教育的力量，致力于探索面向未来的基础教育人才培养模式，
                                改善当前班级授课制背景下学生个性化学习问题，增强学生学习的自主性，为提高学生综合素质和培养高层次拔尖人才做出贡献。
                            </p>
                            <p className="singular-descp">
                                研究院的<strong>核心业务为：</strong>针对数字化时代的课程建设、课堂教学模式变革、学生综合素质评价、学校及区域管理改进等，开展校长、教师、教研员等各类研修项目。
                            </p>
                        </Col>
                    </Row>
                </Container>

                <div className="study backg">
                    <h1 className="home-title">办学内容</h1>
                    <Container>
                        <Row className="">
                            { studyContentList.map((item, idx) => (
                                <Col md={4} sm={4} key={idx} >
                                    <div className="study-item">
                                        <img src={ item.img } alt="团队展示"/>
                                        { item.content }
                                    </div>
                                </Col>
                            )) }
                        </Row>
                    </Container>
                </div>

                <div className="service backg">
                    <h1 className="home-title">服务优势</h1>
                    <Container>
                        <Row className="">
                            { serviceList.map((item, idx) => (
                                <Col span={4} key={idx} >
                                    <div className={ `service-item service-item-${idx}` } >
                                        <strong className="service-title">{ item.title }</strong>
                                        { item.content }
                                    </div>
                                </Col>
                            )) }
                        </Row>
                    </Container>
                </div>

                <div className="team backg">
                    <h1 className="home-title">团队展示</h1>
                    <p className="subtitle">汇集优秀师资队伍，铸造过硬培训质量</p>
                    <Container>
                        <TeamNumberSlider />
                    </Container>
                </div>

                <div className="unit backg">
                    <h1 className="home-title">合作单位</h1>
                    <Container>
                        <Row className="">
                            <Col span={12}>
                                { unitList.map((item, idx) => (
                                    <div key={idx} className="unit-item">
                                        <img src={ item.icon }
                                             alt={ item.title }
                                             title={ item.title }
                                             onClick={ this.enterCoopunitDetail }
                                             className="unit-img" />
                                    </div>
                                )) }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
Main.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

export default Main