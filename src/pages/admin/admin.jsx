import React, { Component } from 'react'
import { Layout } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom'
import LeftNav from '../../components/left-nav/'
import HeaderCom from '../../components/header/'
import HomeCom from '../home/home'
import LineCom from '../charts/line'
import BarCom from '../charts/bar'
import PieCom from '../charts/pie'
import FormCom from '../data-input/form'
import TableCom from '../data-show/table'
import TabsCom from '../data-show/tabs'
import CardCom from '../data-show/card'
import TimelineCom from '../data-show/timeline'
import DescriptionsCom from '../data-show/descriptions'
import EmptyCom from '../data-show/empty'
import NotificationCom from '../feedback/notification'
import ModalCom from '../feedback/modal'
import ResultCom from '../feedback/result'
import './admin.less'

const { Content, Sider } = Layout;

export default class Admin extends Component {
    state = {
        collapsed: false
    };

    // 控制菜单左右缩放
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        if (Number(localStorage['token']) === 0) {
            // 自动跳转到登陆(在render()中)
            return <Redirect to='/login' />;
        }

        // const loginOut = e => {
        //     e.preventDefault();
        //     localStorage['token'] = 0;
        //     this.props.history.replace("/login"); // this.props.history.replace("/login")写到render之外会有问题，此时组件需要用withRouter包装
        // }

        return (
            <Layout style={{ height: '100%' }}>
                <HeaderCom/>
                <Layout style={{ height: '100%' }}>
                    {/*collapsible、collapsed、onCollapse：控制整个菜单的左右收缩*/}
                    <Sider width={200} style={{ background: '#000000' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <LeftNav />
                    </Sider>
                    <Layout className="site-layout" style={{ paddingTop: 64 }}>
                        <Content
                            className="main-content"
                        >
                            <Switch>
                                <Route path="/home" component={HomeCom}></Route>
                                <Route path="/line" component={LineCom}></Route>
                                <Route path="/bar" component={BarCom}></Route>
                                <Route path="/pie" component={PieCom}></Route>
                                <Route path="/form" component={FormCom}></Route>
                                <Route path="/table" component={TableCom}></Route>
                                <Route path="/tabs" component={TabsCom}></Route>
                                <Route path="/card" component={CardCom}></Route>
                                <Route path="/timeline" component={TimelineCom}></Route>
                                <Route path="/descriptions" component={DescriptionsCom}></Route>
                                <Route path="/modal" component={ModalCom}></Route>
                                <Route path="/empty" component={EmptyCom}></Route>
                                <Route path="/result" component={ResultCom}></Route>
                                <Route path="/notification" component={NotificationCom}></Route>
                                <Redirect to="/home" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}