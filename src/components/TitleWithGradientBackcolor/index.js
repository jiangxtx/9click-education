/**
 * Created by Jiangxtx on 2017/7/11-11:32.
 * Description:
 */

import React ,{ Component } from 'react'

import './index.scss'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { title, initColor='#1A659F', endColor='#fff' } = this.props;

        return (
            <h3 className="title-with-gradient"
                style={{ background: `linear-gradient(90deg, ${initColor}, ${endColor})` }} >
                { title }
            </h3>
        )
    }
}
Main.PropTypes = {
    title: React.PropTypes.string.isRequired,
    initColor: React.PropTypes.string,
    endColor: React.PropTypes.string,
}