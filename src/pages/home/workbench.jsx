import React, { Component } from 'react'
import { Row, Col, Card, Button } from 'antd';
import { Typography } from 'antd'
import { List, Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import antd from './images/antd.png'
import ai from './images/ai.png'
import alipay from './images/alipay.png'
import bootstrap from './images/bootstrap.png'
import pro from './images/pro.png'
import react from './images/react.png'
import avatar from './images/avatar.png'
import './workbench.less'

const { Title, Paragraph, Text } = Typography;

const data = [
    {
        title: '曲丽丽 在 高逼格设计天团 新建项目 六月迭代',
    },
    {
        title: '付小小 在 高逼格设计天团 新建项目 六月迭代',
    },
    {
        title: '林东东 在 中二少女团 新建项目 六月迭代',
    },
    {
        title: '周星星 将 5 月日常迭代 更新至已发布状态',
    },
    {
        title: '朱偏右 在 工程效能 发布了 留言',
    },
    {
        title: '乐哥 在 程序员日常 新建项目 品牌迭代',
    }
];

const groupData = [{
    img: antd,
    title: '科学搬砖组'
},
{
    img: ai,
    title: '全组都是吴彦祖'
},
{
    img: alipay,
    title: '中二少女团'
},
{
    img: bootstrap,
    title: '程序员日常'
},
{
    img: pro,
    title: '高逼格设计天团'
},
{
    img: react,
    title: '骗你来学计算机'
}];

export default class workbench extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={17}>
                        <Card title="进行中的项目" extra={<a>全部项目</a>}>
                            <Card.Grid className="grid-style">
                                <Title level={5} className="grid-title"><img src={antd} /> Alipay</Title>
                                <Paragraph className="grid-paragraph">那是一种内在的东西，他们到达不了，也无法触及的.</Paragraph>
                                <Paragraph className="grid-paragraph"><Text>科学搬砖组</Text> <Text className="grid-time">9天前</Text></Paragraph>
                            </Card.Grid>
                            <Card.Grid className="grid-style">
                                <Title level={5} className="grid-title"><img src={ai} />Angular</Title>
                                <Paragraph className="grid-paragraph">希望是一个好东西，也许是最好的，好东西是不会消亡.</Paragraph>
                                <Paragraph className="grid-paragraph"><Text>科学搬砖组</Text> <Text className="grid-time">9天前</Text></Paragraph>
                            </Card.Grid>
                            <Card.Grid className="grid-style">
                                <Title level={5} className="grid-title"><img src={alipay} />Ant Design</Title>
                                <Paragraph className="grid-paragraph">城镇中有那么多的酒馆，她却偏偏走进了我的酒馆.</Paragraph>
                                <Paragraph className="grid-paragraph"><Text>科学搬砖组</Text> <Text className="grid-time">9天前</Text></Paragraph>
                            </Card.Grid>
                            <Card.Grid className="grid-style">
                                <Title level={5} className="grid-title"><img src={bootstrap} />Ant Design Pro</Title>
                                <Paragraph className="grid-paragraph">那时候我只会想自己想要什么，从不想自己拥有什么.</Paragraph>
                                <Paragraph className="grid-paragraph"><Text>科学搬砖组</Text> <Text className="grid-time">9天前</Text></Paragraph>
                            </Card.Grid>
                            <Card.Grid className="grid-style">
                                <Title level={5} className="grid-title"><img src={pro} />Bootstrap</Title>
                                <Paragraph className="grid-paragraph">凛冬将至.</Paragraph>
                                <Paragraph className="grid-paragraph"><Text>科学搬砖组</Text> <Text className="grid-time">9天前</Text></Paragraph>
                            </Card.Grid>
                            <Card.Grid className="grid-style">
                                <Title level={5} className="grid-title"><img src={react} />React</Title>
                                <Paragraph className="grid-paragraph">生命就像一盒巧克力，结果往往出人意料.</Paragraph>
                                <Paragraph className="grid-paragraph"><Text>科学搬砖组</Text> <Text className="grid-time">9天前</Text></Paragraph>
                            </Card.Grid>
                        </Card>

                        <div style={{ height: 15, clear: 'both' }}></div>

                        <Card title="进行中的项目">
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={avatar} />}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description="9 天前"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={7}>
                        <Card title="快速开始 / 便捷导航">
                            <Button type='text' className="navButton">操作一</Button>
                            <Button type='text' className="navButton">操作二</Button>
                            <Button type='text' className="navButton">操作三</Button>
                            <Button type='text' className="navButton">操作四</Button>
                            <Button type='text' className="navButton">操作五</Button>
                            <Button type='primary' ghost size='small' icon={<PlusOutlined />}>添加</Button>
                        </Card>

                        <div style={{ height: 15 }}></div>

                        <Card title="团队">
                            <List
                                dataSource={groupData}
                                renderItem={item => (
                                    <List.Item className="groupCardList">
                                        <img src={item.img}/> {item.title}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
