/**
 * Created by Jiangxtx on 2017/7/11-10:35.
 * Description:
 */

import React ,{ Component } from 'react'
import { Table } from 'antd'
import { Container, ContainerFluid, Row, Col } from '../layout'
import Breadcrumb from '../components/BreadCrumb'
import { teacherTrainData } from '../data/index-html-mock.data'

import './education-train.scss'

const columns = [
    {
        title: '研修课程',
        key: 'name',
        dataIndex: 'name',
        width: 300,
    }, {
        title: '课程目的',
        key: 'aim',
        dataIndex: 'aim',
        width: 500,
    }, {
        title: '研修目标',
        key: 'target',
        dataIndex: 'target',
        width: 300,
        render: (value, row, index) => {
            const obj = {
                children: value,
                props: {},
            };
            if (index === 0) {
                obj.props.rowSpan = 18;
            } else {
                obj.props.rowSpan = 0;
            }

            return obj;
        }
    }
]

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { tid="1" } = this.props.params;

        const detailInfo = teacherTrainData.data.find(item => item.id === ~~tid);

        const crumbData = [
            { name: '教师培训', link: '/train' },
            { name: detailInfo.name, link: null },
        ]

        const tableData = detailInfo.courseList.map((item, idx) => ({
            name: item.name,
            aim: item.aim,
            target: item.target && item.target.map((titem, tidx) => (
                <p key={tidx}><span className="list-flag"></span>{ titem }</p>
            ))
        }))

        const trainSchemeInfo = [
            {
                title: '一、研修课程',
                detail: (
                    <Table dataSource={ tableData }
                           columns={ columns }
                           pagination={false}
                           bordered={true} />
                ),
            }, {
                title: '二、研修对象',
                detail: (
                    <p>{ detailInfo.object }</p>
                ),
            }, {
                title: '三、研修形式',
                detail: (
                    <div className="train-style">
                        { detailInfo.style.map((item, idx) => (
                            <div className="train-style-item" key={idx}>
                                <span className="train-style-item-key">{ item.method }：</span>
                                <span className="train-style-item-value">{ item.methodDescp }</span>
                                <p></p>
                                <span className="train-style-item-key">适用于：</span>
                                <span className="train-style-item-value">{ item.apply }</span>
                            </div>
                        )) }
                    </div>
                ),
            }, {
                title: '四、服务保障',
                detail: <p>{ detailInfo.safeguard }</p>,
            }, {
                title: '五、考核结业',
                detail: (
                    <div className="train-exam">
                        { detailInfo.certificate.map((item, idx) => (
                            <p key={idx}>{ item }</p>
                        )) }
                    </div>
                ),
            }, {
                title: '六、评估反馈',
                detail: (
                    <p>{ detailInfo.evaluate }</p>
                ),
            }, {
                title: '七、成功案例',
                detail: (
                    <div className="train-exam">
                        { detailInfo.successcase.map((item, idx) => (
                            <p key={idx}>{ item }</p>
                        )) }
                    </div>
                ),
            }
        ]

        return (
            <div className="trainDetail">
                {/* 面包屑导航 */}
                <Breadcrumb crumbData={ crumbData } />

                {/* 研修具体信息 */}
                <div className="wrap">
                    { trainSchemeInfo.map((item, idx) => (
                        <div className="trainDetail-item" key={idx}>
                            <div className="title">{ item.title }</div>
                            <div className="content">{ item.detail }</div>
                        </div>
                    ))}



                </div>

            </div>
        )
    }
}