import React, { Component } from 'react'
import { Descriptions, Badge, List, Card, Table, Tag, Space } from 'antd';

const columns = [
    {
      title: '时间',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: '当前进度',
      dataIndex: 'process',
      key: 'process',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: n => n == 0 ? <Badge status="processing" text="进行中" /> : <Badge status="success" text="成功" />
    },
    {
      title: '操作员ID',
      key: 'operator',
      dataIndex: 'operator'
    },
    {
      title: '耗时',
      key: 'time_consuming',
      dataIndex: 'time_consuming'
    },
  ];
  
  const data = [
    {
      key: '1',
      date: '2017-10-01 14:10',
      process: '联系客户',
      status: 0,
      operator: '取货员 ID1234',
      time_consuming: '5mins'
    },
    {
      key: '2',
      date: '2017-10-01 14:05',
      process: '取货员出发',
      status: 1,
      operator: '取货员 ID1234',
      time_consuming: '1h'
    },
    {
      key: '3',
      date: '2017-10-01 13:05',
      process: '取货员接单',
      status: 1,
      operator: '取货员 ID1234',
      time_consuming: '5mins'
    },
  ];

export default class baseDetail extends Component {
    render() {
        return (
            <div>
                <Descriptions title="退款申请" style={{ paddingBottom: 15 }}>
                    <Descriptions.Item label="取货单号">1000000000</Descriptions.Item>
                    <Descriptions.Item label="状态">已取货</Descriptions.Item>
                    <Descriptions.Item label="销售单号">1234123421</Descriptions.Item>
                    <Descriptions.Item label="子订单">3214321432</Descriptions.Item>
                </Descriptions>

                <Descriptions title="用户信息" style={{ paddingBottom: 15 }}>
                    <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
                    <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>
                    <Descriptions.Item label="常用快递">菜鸟仓储</Descriptions.Item>
                    <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
                    <Descriptions.Item label="备注">无</Descriptions.Item>
                </Descriptions>

                <Descriptions title="退货商品" bordered style={{ paddingBottom: 15 }}>
                    <Descriptions.Item label="商品编号">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Usage Time" span={2}>
                        2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Config Info">
                        Data disk type: MongoDB
                        <br />
                        Database version: 3.4
                        <br />
                        Package: dds.mongo.mid
                        <br />
                        Storage space: 10 GB
                        <br />
                        Replication factor: 3
                        <br />
                        Region: East China 1<br />
                    </Descriptions.Item>
                </Descriptions>

                <Table columns={columns} dataSource={data} title={() => '退货进度'}/>
            </div>
        )
    }
}
