import React, { Component } from 'react'
import { Button, message } from 'antd'
import { Container, Row, Col } from '../../layout'
import '../../css/newsDetail.css'
import { MESSAGE_CONFIG } from '../../Config/constants'

message.config(MESSAGE_CONFIG);

export default class NewsDetail extends Component {
    constructor(props) {
        super(props)
        this.handleApply = this.handleApply.bind(this)
    }
    handleApply() {
        message.info('准备报名参加。。。')
    }
    render() {
        const data = {
            title: '中小学教师研修方案',
            publishTime: '2016.01.02'
        };
        const infoArr = [
            { title: '一、指导思想', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '二、研修目标', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '三、研修人员', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '四、研修时间', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '五、研修地点', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '六、研修形式', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '七、研修组织', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '八、考核与结业', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '九、人员选定', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '十、联系方式', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
            { title: '十一、主办方', content: '这是一条默认的数据信息，只为了向你呈现最美的瞬间。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。告诉你生活的不易，与生活的美好。<p>这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。这是一条默认的数据信息，只为了向你呈现最美的瞬间。告诉你生活的不易，与生活的美好。<p>' },
        ];

        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h3 className="newsDetail-title">{data.title}</h3>
                    <time className="newsDetail-time">发布时间: {data.publishTime}</time>
                </div>
                <div className="newsDetail-content">
                    { infoArr.map((item, idx) => (
                        <div key={idx} className="contentItem">
                            <h2 className="content-key">{item.title}</h2>
                            <div className="content-value" dangerouslySetInnerHTML={{__html: item.content }}></div>
                        </div>
                    )) }
                </div>
                <div className="btn-download">
                    <Button className="detail-btn" type="primary" onClick={this.handleApply}>报名参加</Button>
                </div>
            </div>
        )
    }
}