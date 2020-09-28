import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Avatar } from 'antd';
import './card-list.less'

const { Meta } = Card;

export default class cardList extends Component {
    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/bootstrap.png")} />}
                                title="Alipay"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>

                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/alipay.png")} />}
                                title="Angular"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>

                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/react.png")} />}
                                title="Alipay"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>

                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/pro.png")} />}
                                title="React"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>

                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/alipay.png")} />}
                                title="Alipay"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>

                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/ai.png")} />}
                                title="Angular"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>

                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/bootstrap.png")} />}
                                title="Alipay"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>

                    <Col span="6" style={{ marginBottom: 24 }}>
                        <Card
                            style={{ width: '100%' }}
                            hoverable={true}
                        >
                            <Meta
                                avatar={<Avatar src={require("./images/pro.png")} />}
                                title="React"
                                description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一"
                            />
                            <Row className="cardRow"><Col span={12}>操作一</Col><Col span={12}>操作二</Col></Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
