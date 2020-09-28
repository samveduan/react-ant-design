import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import p1 from './images/1.png'
import p2 from './images/3.png'
import p3 from './images/5.png'
import p4 from './images/6.png'
import './search-list.less'
const { Meta } = Card;

export default class searchList extends Component {
    state = {
        value: 1
    }

    render() {
        return (
            <><Row gutter={24}>
                <Col span={6} className="row-col">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="Alipay"
                                src={p1}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Alipay"
                            description="那是一种内在的东西， 他们到达不了，也无法触及的"
                        />
                    </Card>
                </Col>

                <Col span={6} className="RowCol">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="example"
                                src={p2}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Angular"
                            description="希望是一个好东西，也许是最好的，好东西是不会消亡的"
                        />
                    </Card>
                </Col>

                <Col span={6} className="RowCol">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="example"
                                src={p3}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Ant Design"
                            description="生命就像一盒巧克力，结果往往出人意料"
                        />
                    </Card>
                </Col>

                <Col span={6} className="RowCol">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="example"
                                src={p4}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Ant Design Pro"
                            description="城镇中有那么多的酒馆，她却偏偏走进了我的酒馆"
                        />
                    </Card>
                </Col>

                <Col span={6} className="RowCol">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="example"
                                src={p3}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Ant Design"
                            description="生命就像一盒巧克力，结果往往出人意料"
                        />
                    </Card>
                </Col>

                <Col span={6} className="RowCol">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="example"
                                src={p4}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Ant Design Pro"
                            description="城镇中有那么多的酒馆，她却偏偏走进了我的酒馆"
                        />
                    </Card>
                </Col>

                <Col span={6} className="RowCol">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="Alipay"
                                src={p1}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Alipay"
                            description="那是一种内在的东西， 他们到达不了，也无法触及的"
                        />
                    </Card>
                </Col>

                <Col span={6} className="RowCol">
                    <Card
                        style={{ width: '100%' }}
                        hoverable={true}
                        cover={
                            <img
                                alt="example"
                                src={p2}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            title="Angular"
                            description="希望是一个好东西，也许是最好的，好东西是不会消亡的"
                        />
                    </Card>
                </Col>
            </Row>
            </>
        )
    }
}