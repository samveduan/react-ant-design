import React, { Component } from 'react'
import { Table, Pagination, Card, Modal, Button, Form, Input, InputNumber, Select, Checkbox, Radio, notification } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'

const { Option } = Select;
const { TextArea } = Input;

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    }
};

export default class Home extends Component {
    state = {
        tableData: [],
        selectedRowKeys: [], // Check here to configure the default column
        total: 0, // for Pagination
        columns: [
            {
                title: 'ID',
                dataIndex: 'id',
                width: 30,
            },
            {
                title: '标题',
                dataIndex: 'title',
                width: 500,
            },
            {
                title: '内容',
                dataIndex: 'content'
            },
        ],
        addModalVisible: false
    };

    handleDeleteArticle() {
        if (this.state.selectedRowKeys.length === 0) {
            notification['error']({
                message: '错误提示',
                description:
                    '请选择要删除的内容！',
            });
        } else {
            notification['success']({
                message: '正确提示',
                description:
                    `将要删除${JSON.stringify(this.state.selectedRowKeys)}`,
            });
        }
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    // 获取表格数据
    getData(pageNumber, pageSize) {
        axios.get(`/blog/all/?pageSize=${pageSize}&pageNumber=${pageNumber}&sortName=id&sortOrder=desc&_=1595230808893`).then((resp) => {
            console.log("all data:");
            console.log(resp);
            let ajaxData = [];
            for (let i = 0; i < resp.data.rows.length; i++) {
                ajaxData.push({
                    key: resp.data.rows[i].id,
                    id: resp.data.rows[i].id,
                    title: resp.data.rows[i].title,
                    content: resp.data.rows[i].content,
                });
            }

            this.setState({
                tableData: ajaxData,
                total: resp.data.total
            })

        }, (err) => {
            console.log(err);
        });
    }

    onChange = (pageNumber, pageSize) => {
        this.getData(pageNumber, pageSize);
    };

    // add modal
    showAddModal = () => {
        this.setState({
            addModalVisible: true
        })
    }

    addModalHandleOk = e => {
        this.addModalFormRef.current.validateFields()
        .then(values => {
            this.addModalFormRef.current.resetFields();
            this.setState({
                addModalVisible: false
            });
        })
        .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    addModalHandCancel = e => {
        this.addModalFormRef.current.resetFields();
        this.setState({
            addModalVisible: false
        })
    }

    // 表单相关
    addModalFormRef = React.createRef(); // 定义一个表单

    componentDidMount() {
        this.getData(1, 10);
    }

    render() {
        const { selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };

        return (
            <Card title="Default size card" extra={<Button type="primary" ghost size="small" icon={<PlusOutlined/>} onClick={this.showAddModal}>添加</Button>} style={{ width: '100%' }}>
                <Table columns={this.state.columns} dataSource={this.state.tableData} rowSelection={rowSelection} pagination={false} bordered
                    onRow={record => {
                        return {
                            onClick: event => { console.log(record) },
                            onDoubleClick: event => { console.log(event) }
                        }
                    }}
                >
                </Table>
                <div style={{ height: 15 }}></div>
                <Pagination
                    total={this.state.total}
                    showSizeChanger
                    showQuickJumper
                    showTotal={total => `共 ${total} 条`}
                    onChange={this.onChange}
                />
                <Modal
                    title="创建"
                    visible={this.state.addModalVisible}
                    width={660}
                    onOk={this.addModalHandleOk}
                    onCancel={this.addModalHandCancel}
                    okText="确认"
                    cancelText="取消"
                    maskClosable={false}
                    destroyOnClose={true}
                >
                    <Form {...layout} ref={this.addModalFormRef} name="control-ref" preserve={false}>
                        <Form.Item label="账号" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="account"
                                style={{ display: 'inline-block', width: 'calc(80% - 8px)', marginRight: 15 }}
                                rules={[
                                    {
                                        required: true,
                                        message: "账号不能为空"
                                    },
                                    {
                                        pattern: /^[a-zA-Z0-9_()（）\u4e00-\u9fa5]{1,32}$/,
                                        message: "账号为1至32位汉字、字母、数字、下划线或中英文括号"
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}
                            >
                                <Checkbox>USBKEY</Checkbox>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label="姓名" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="name"
                                style={{ display: 'inline-block', width: 'calc(80% - 8px)' }}
                                rules={[
                                    {
                                        required: true,
                                        message: "姓名不能为空"
                                    },
                                    {
                                        pattern: /^[a-zA-Z0-9_()（）\u4e00-\u9fa5]{1,32}$/,
                                        message: "姓名为1至32位汉字、字母、数字、下划线或中英文括号"
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label="个人空间配额">
                            <Form.Item
                                name="space"
                                noStyle
                                rules={[{
                                    required: true,
                                    message: "个人空间配额不能为空"
                                }, {
                                    type: 'number',
                                    min: 1,
                                    max: 100,
                                    message: "个人空间配额为1-100之间整数"
                                }
                                ]}
                            >
                                <InputNumber style={{ width: 160, marginRight: 15 }} placeholder="1-100之间整数" />
                            </Form.Item>
                        G
                </Form.Item>
                        <Form.Item label="私密空间配额">
                            <Form.Item
                                name="private"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: "私密空间配额不能为空"
                                    }, {
                                        type: 'number',
                                        min: 1,
                                        max: 100,
                                        message: "私密空间配额为1-100之间整数"
                                    }
                                ]}
                            >
                                <InputNumber style={{ width: 160, marginRight: 15 }} placeholder="1-100之间整数" />
                            </Form.Item>
                        G
                </Form.Item>
                        <Form.Item label="证书级别" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="level"
                                style={{ display: 'inline-block', width: 'calc(80% - 8px)' }}
                                rules={[
                                    {
                                        required: true,
                                        message: "证书级别不能为空"
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="请选择证书级别"
                                    allowClear
                                >
                                    <Option value="1">一级</Option>
                                    <Option value="2">二级</Option>
                                </Select>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label="存储服务器" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="server"
                                style={{ display: 'inline-block', width: 'calc(80% - 8px)' }}
                                rules={[
                                    {
                                        required: true,
                                        message: "存储服务器不能为空"
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="请选择存储服务器"
                                    allowClear
                                >
                                    <Option value="1">服务器一</Option>
                                    <Option value="2">服务器二</Option>
                                </Select>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item
                            name="share"
                            label="是否允许中心共享"
                            rules={[
                                {
                                    required: true,
                                    message: "中心共享不能为空"
                                },
                            ]}
                        >
                            <Radio.Group name="radiogroup">
                                <Radio value={1}>是</Radio>
                                <Radio value={0}>否</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="描述" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="describe"
                                style={{ display: 'inline-block', width: 'calc(80% - 8px)' }}
                                rules={[
                                    {
                                        pattern: /^[a-zA-Z0-9_()（），。,.\u4e00-\u9fa5]{0,128}$/,
                                        message: '描述只能为汉字、字母、数字、下划线或中英文逗号、句号和括号'
                                    }
                                ]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        )
    }
}
