import React, { Component } from 'react'
import { Card } from 'antd';
import { Form, Input, Select, Button, Radio } from 'antd';
import { Row, Col, Divider } from 'antd';
import { DatePicker } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default class AdvancedForm extends Component {
    sendForm = () => {
        this.formRef.current.validateFields().then(values => {
            this.formRef.current.resetFields();
            this.setState({
                visible: false
            })
            console.log(values);
        })
        .catch(error => {
            console.log(error);
        })
    }

    formRef = React.createRef();

    render() {
        return (
            <div>
                <Card title="仓库管理" style={{ width: '100%' }}>
                    <Form
                        layout="vertical"
                        ref={this.formRef} 
                        name="control-ref"
                    >
                        <Row gutter={30}>
                            <Col className="gutter-row" span={8}>
                                <Form.Item
                                    label="仓库名"
                                    name="storename"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder="请输入仓库名" />
                                </Form.Item>
                                <Form.Item
                                    label="审批人"
                                    name="approver"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Select placeholder="请选择审批员">
                                        <Option value="jack">付晓晓</Option>
                                        <Option value="lucy">周毛毛</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Form.Item
                                    label="仓库域名"
                                    name="domainname"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input addonBefore="http://" addonAfter=".com" placeholder="请输入" />
                                </Form.Item>
                                <Form.Item
                                    label="生效日期"
                                    name="date"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <RangePicker style={{width: '100%'}}/>
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Form.Item
                                    label="仓库管理员"
                                    name="admin"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Select placeholder="请选择管理员">
                                        <Option value="jack">付晓晓</Option>
                                        <Option value="lucy">周毛毛</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item 
                                    label="仓库类型"
                                    name="type"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Select placeholder="请选择仓库类型">
                                        <Option value="jack">私密</Option>
                                        <Option value="lucy">公开</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="gutter-row" span={24}>
                                <Button type="primary" htmlType="submit" onClick={() => this.sendForm()}>提交</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>

            </div>
        )
    }
}
