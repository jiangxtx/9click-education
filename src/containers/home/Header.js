import '../../css/home/index_head.less'

import React ,{Component}from  'react'
import { Form } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../../layout'
import NavbarMenu from '../../components/NavbarMenu'
import { navbarList } from '../../Config/proj-config'

import logoImg from '../../img/home/proj-logo.png'
import phoneIcon from '../../img/home/phone-icon.png'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentKey: '0',
        };
        this.onBackHome = this.onBackHome.bind(this)
        this.judgeCurrentKey = this.judgeCurrentKey.bind(this)
    }

    onBackHome() {
        this.context.router.push(`/`)
    }

    componentDidMount(){
        this.judgeCurrentKey()
    }

    componentWillReceiveProps(nextProps) {
        this.judgeCurrentKey()
    }

    judgeCurrentKey() {
        const { hash } = window.location;
        const routeMatchArr = hash.match(/#(\S*)\?/);
        const routeStr = routeMatchArr && routeMatchArr[1] || '';
        const routeArr = routeStr.split('/').filter(item => !!item);
        const currentItem = navbarList.find(item => item.link === routeArr[0]) || {};
        const currentKey = currentItem.key || '0';

        // console.log('Header -> hash: ', hash, currentKey, currentItem)
        this.setState({
            currentKey,
        })
    }

    render() {
        const { currentKey } = this.state;

        return(
            <div className="headTop">
                <Container>
                    <Row>
                        <Col lg={4} md={2} sm={6}>
                            <div className="headLogo">
                                <img src={ logoImg } onClick={ this.onBackHome } alt=""/>
                            </div>
                        </Col>
                        <Col lg={6} md={7} sm={12}>
                            <NavbarMenu navbarList={ navbarList } currentKey={ currentKey } />
                        </Col>
                        <Col lg={2} md={3} sm={6}>
                            <span className="tel">
                                <img src={ phoneIcon } alt="" className="telIcon" />021-62687637

                            </span>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
Main.contextTypes = {
    router: React.PropTypes.object,
}

const Head = Form.create()(Main);

export default Head