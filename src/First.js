import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { HashRouter, Route, Link } from 'react-router-dom'
import Bs from './Bs'
import FormCom from './FormCom'
import One from './One'
import ButtonCom from './ButtonCom'
import MenuCom from './MenuCom'
import StepsCom from './StepsCom'
import TabsCom from './TabsCom'
import TableCom from './TableCom'
import MessageCom from './MessageCom'
import NotificationCom from './NotificationCom'
import ProgressCom from './ProgressCom'
import SpinCom from './SpinCom'
import BadgeCom from './BadgeCom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class First extends React.Component {
    constructor() {
        super();
    }

    //只展开当前父级菜单 begin
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    //只展开当前父级菜单 end

    render() {
        return (<div>
            <Layout>
                <HashRouter>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background" style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['2']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                onOpenChange={this.onOpenChange}
                                openKeys={this.state.openKeys}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1"><Link to="/bs">tree</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/form">form</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/one">One</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/menu">Menu</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5"><Link to="/step">Step</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/tabs">Tabs</Link></Menu.Item>
                                    <Menu.Item key="7"><Link to="/table">Table</Link></Menu.Item>
                                    <Menu.Item key="8"><Link to="/message">Message</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9"><Link to="/notification">Notification</Link></Menu.Item>
                                    <Menu.Item key="10"><Link to="/progress">ProgressCom</Link></Menu.Item>
                                    <Menu.Item key="11"><Link to="/spin">Spin</Link></Menu.Item>
                                    <Menu.Item key="12"><Link to="/badge">Badge</Link></Menu.Item>
                                    <Menu.Item key="13"><Link to="/button">Button</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px', marginLeft: 200 }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    height: '100%',
                                }}
                            >
                                <Route path="/bs" exact component={Bs}></Route>
                                <Route path="/form" component={FormCom}></Route>
                                <Route path="/one" component={One}></Route>
                                <Route path="/menu" component={MenuCom}></Route>
                                <Route path="/step" component={StepsCom}></Route>
                                <Route path="/tabs" component={TabsCom}></Route>
                                <Route path="/table" component={TableCom}></Route>
                                <Route path="/message" component={MessageCom}></Route>
                                <Route path="/notification" component={NotificationCom}></Route>
                                <Route path="/progress" component={ProgressCom}></Route>
                                <Route path="/spin" component={SpinCom}></Route>
                                <Route path="/badge" component={BadgeCom}></Route>
                                <Route path="/button" component={ButtonCom}></Route>
                            </Content>
                        </Layout>
                    </Layout>
                </HashRouter>
            </Layout>
        </div>)
    }
}