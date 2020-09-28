import React, { Component } from 'react'
import { Row, Col, Card, Statistic } from 'antd'
import echarts from 'echarts'

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class monitor extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('chart-container'));
        myChart.setOption(this.getOption());

        let myProportionChart = echarts.init(document.getElementById('proportion-chart-container'));
        myProportionChart.setOption(this.getOption2());

        let myRightChart = echarts.init(document.getElementById('forecast-chart-container'));
        myRightChart.setOption(this.getRightChartOption());

        let myRightChart2 = echarts.init(document.getElementById('rate-chart-container'));

        let _this = this;

        function startChart() {
            let option = _this.getRightChart2Option();
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myRightChart2.setOption(option, true);
        }

        startChart();

        setInterval(function () {
            startChart();
        }, 2000);
    }

    getOption = () => {
        var dataBJ = [
            [1, 55, 9, 56, 0.46, 18, 6, "良"],
            [2, 25, 11, 21, 0.65, 34, 9, "优"],
            [3, 56, 7, 63, 0.3, 14, 5, "良"],
            [4, 33, 7, 29, 0.33, 16, 6, "优"],
            [5, 42, 24, 44, 0.76, 40, 16, "优"],
            [6, 82, 58, 90, 1.77, 68, 33, "良"],
            [7, 74, 49, 77, 1.46, 48, 27, "良"],
            [8, 78, 55, 80, 1.29, 59, 29, "良"],
            [9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
            [10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
            [11, 39, 19, 38, 0.57, 31, 15, "优"],
            [12, 41, 11, 40, 0.43, 21, 7, "优"],
            [13, 64, 38, 74, 1.04, 46, 22, "良"],
            [14, 108, 79, 120, 1.7, 75, 41, "轻度污染"],
            [15, 108, 63, 116, 1.48, 44, 26, "轻度污染"],
            [16, 33, 6, 29, 0.34, 13, 5, "优"],
            [17, 94, 66, 110, 1.54, 62, 31, "良"],
            [18, 186, 142, 192, 3.88, 93, 79, "中度污染"],
            [19, 57, 31, 54, 0.96, 32, 14, "良"],
            [20, 22, 8, 17, 0.48, 23, 10, "优"],
            [21, 39, 15, 36, 0.61, 29, 13, "优"],
            [22, 94, 69, 114, 2.08, 73, 39, "良"],
            [23, 99, 73, 110, 2.43, 76, 48, "良"],
            [24, 31, 12, 30, 0.5, 32, 16, "优"],
            [25, 42, 27, 43, 1, 53, 22, "优"],
            [26, 154, 117, 157, 3.05, 92, 58, "中度污染"],
            [27, 234, 185, 230, 4.09, 123, 69, "重度污染"],
            [28, 160, 120, 186, 2.77, 91, 50, "中度污染"],
            [29, 134, 96, 165, 2.76, 83, 41, "轻度污染"],
            [30, 52, 24, 60, 1.03, 50, 21, "良"],
            [31, 46, 5, 49, 0.28, 10, 6, "优"]
        ];

        var dataGZ = [
            [1, 26, 37, 27, 1.163, 27, 13, "优"],
            [2, 85, 62, 71, 1.195, 60, 8, "良"],
            [3, 78, 38, 74, 1.363, 37, 7, "良"],
            [4, 21, 21, 36, 0.634, 40, 9, "优"],
            [5, 41, 42, 46, 0.915, 81, 13, "优"],
            [6, 56, 52, 69, 1.067, 92, 16, "良"],
            [7, 64, 30, 28, 0.924, 51, 2, "良"],
            [8, 55, 48, 74, 1.236, 75, 26, "良"],
            [9, 76, 85, 113, 1.237, 114, 27, "良"],
            [10, 91, 81, 104, 1.041, 56, 40, "良"],
            [11, 84, 39, 60, 0.964, 25, 11, "良"],
            [12, 64, 51, 101, 0.862, 58, 23, "良"],
            [13, 70, 69, 120, 1.198, 65, 36, "良"],
            [14, 77, 105, 178, 2.549, 64, 16, "良"],
            [15, 109, 68, 87, 0.996, 74, 29, "轻度污染"],
            [16, 73, 68, 97, 0.905, 51, 34, "良"],
            [17, 54, 27, 47, 0.592, 53, 12, "良"],
            [18, 51, 61, 97, 0.811, 65, 19, "良"],
            [19, 91, 71, 121, 1.374, 43, 18, "良"],
            [20, 73, 102, 182, 2.787, 44, 19, "良"],
            [21, 73, 50, 76, 0.717, 31, 20, "良"],
            [22, 84, 94, 140, 2.238, 68, 18, "良"],
            [23, 93, 77, 104, 1.165, 53, 7, "良"],
            [24, 99, 130, 227, 3.97, 55, 15, "良"],
            [25, 146, 84, 139, 1.094, 40, 17, "轻度污染"],
            [26, 113, 108, 137, 1.481, 48, 15, "轻度污染"],
            [27, 81, 48, 62, 1.619, 26, 3, "良"],
            [28, 56, 48, 68, 1.336, 37, 9, "良"],
            [29, 82, 92, 174, 3.29, 0, 13, "良"],
            [30, 106, 116, 188, 3.628, 101, 16, "轻度污染"],
            [31, 118, 50, 0, 1.383, 76, 11, "轻度污染"]
        ];

        var dataSH = [
            [1, 91, 45, 125, 0.82, 34, 23, "良"],
            [2, 65, 27, 78, 0.86, 45, 29, "良"],
            [3, 83, 60, 84, 1.09, 73, 27, "良"],
            [4, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
            [5, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
            [6, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
            [7, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
            [8, 89, 65, 78, 0.86, 51, 26, "良"],
            [9, 53, 33, 47, 0.64, 50, 17, "良"],
            [10, 80, 55, 80, 1.01, 75, 24, "良"],
            [11, 117, 81, 124, 1.03, 45, 24, "轻度污染"],
            [12, 99, 71, 142, 1.1, 62, 42, "良"],
            [13, 95, 69, 130, 1.28, 74, 50, "良"],
            [14, 116, 87, 131, 1.47, 84, 40, "轻度污染"],
            [15, 108, 80, 121, 1.3, 85, 37, "轻度污染"],
            [16, 134, 83, 167, 1.16, 57, 43, "轻度污染"],
            [17, 79, 43, 107, 1.05, 59, 37, "良"],
            [18, 71, 46, 89, 0.86, 64, 25, "良"],
            [19, 97, 71, 113, 1.17, 88, 31, "良"],
            [20, 84, 57, 91, 0.85, 55, 31, "良"],
            [21, 87, 63, 101, 0.9, 56, 41, "良"],
            [22, 104, 77, 119, 1.09, 73, 48, "轻度污染"],
            [23, 87, 62, 100, 1, 72, 28, "良"],
            [24, 168, 128, 172, 1.49, 97, 56, "中度污染"],
            [25, 65, 45, 51, 0.74, 39, 17, "良"],
            [26, 39, 24, 38, 0.61, 47, 17, "优"],
            [27, 39, 24, 39, 0.59, 50, 19, "优"],
            [28, 93, 68, 96, 1.05, 79, 29, "良"],
            [29, 188, 143, 197, 1.66, 99, 51, "中度污染"],
            [30, 174, 131, 174, 1.55, 108, 50, "中度污染"],
            [31, 187, 143, 201, 1.39, 89, 53, "中度污染"]
        ];

        var schema = [
            { name: 'date', index: 0, text: '日期' },
            { name: 'AQIindex', index: 1, text: 'AQI' },
            { name: 'PM25', index: 2, text: 'PM2.5' },
            { name: 'PM10', index: 3, text: 'PM10' },
            { name: 'CO', index: 4, text: ' CO' },
            { name: 'NO2', index: 5, text: 'NO2' },
            { name: 'SO2', index: 6, text: 'SO2' },
            { name: '等级', index: 7, text: '等级' }
        ];

        let lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };

        return {
            backgroundColor: '#333',
            legend: {
                bottom: 30,
                data: ['北京', '上海', '广州'],
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj[0].value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + obj[0].seriesName + ' ' + value[0] + '日期：'
                        + value[7]
                        + '</div>'
                        + schema[1].text + '：' + value[1] + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>'
                        + schema[4].text + '：' + value[4] + '<br>'
                        + schema[5].text + '：' + value[5] + '<br>'
                        + schema[6].text + '：' + value[6] + '<br>';
                }
            },
            // dataZoom: {
            //     show: true,
            //     orient: 'vertical',
            //     parallelAxisIndex: [0]
            // },
            parallelAxis: [
                { dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start' },
                { dim: 1, name: schema[1].text },
                { dim: 2, name: schema[2].text },
                { dim: 3, name: schema[3].text },
                { dim: 4, name: schema[4].text },
                { dim: 5, name: schema[5].text },
                { dim: 6, name: schema[6].text },
                {
                    dim: 7, name: schema[7].text,
                    type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
                }
            ],
            visualMap: {
                show: true,
                min: 0,
                max: 150,
                dimension: 2,
                inRange: {
                    color: ['#d94e5d', '#eac736', '#50a3ba'].reverse(),
                    // colorAlpha: [0, 1]
                }
            },
            parallel: {
                left: '5%',
                right: '8%',
                bottom: 100,
                parallelAxisDefault: {
                    type: 'value',
                    name: 'AQI指数',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 12
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#aaa'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#777'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'parallel',
                    lineStyle: lineStyle,
                    data: dataBJ
                },
                {
                    name: '上海',
                    type: 'parallel',
                    lineStyle: lineStyle,
                    data: dataSH
                },
                {
                    name: '广州',
                    type: 'parallel',
                    lineStyle: lineStyle,
                    data: dataGZ
                }
            ]
        };
    }

    getOption2 = () => {
        let data = [{
            name: 'Apples',
            value: 70
        }, {
            name: 'Strawberries',
            value: 68
        }, {
            name: 'Bananas',
            value: 48
        }, {
            name: 'Oranges',
            value: 40
        }, {
            name: 'Pears',
            value: 32
        }, {
            name: 'Pineapples',
            value: 27
        }, {
            name: 'Grapes',
            value: 18
        }];

        return {
            series: [{
                type: 'pie',
                radius: '25%',
                center: ['50%', '50%'],
                data: data,
                animation: false,
                label: {
                    position: 'outer',
                    alignTo: 'none',
                    bleedMargin: 5
                },
                left: 0,
                right: '66.6667%',
                top: -50,
                bottom: 0
            }, {
                type: 'pie',
                radius: '25%',
                center: ['50%', '50%'],
                data: data,
                animation: false,
                label: {
                    position: 'outer',
                    alignTo: 'labelLine',
                    bleedMargin: 5
                },
                left: '33.3333%',
                right: '33.3333%',
                top: -50,
                bottom: 0
            }, {
                type: 'pie',
                radius: '25%',
                center: ['50%', '50%'],
                data: data,
                animation: false,
                label: {
                    position: 'outer',
                    alignTo: 'edge',
                    margin: 20
                },
                left: '66.6667%',
                right: 0,
                top: -50,
                bottom: 0
            }]
        };
    }

    getRightChartOption = () => {
        return {
            grid: {
                x: 25,
                y: -30,
                x2: 45,
                y2: 0
            },
            xAxis: {
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '30%']
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                seriesIndex: 0,
                pieces: [{
                    gt: 1,
                    lt: 3,
                    color: 'rgba(0, 180, 0, 0.5)'
                }, {
                    gt: 5,
                    lt: 7,
                    color: 'rgba(0, 180, 0, 0.5)'
                }]
            },
            series: [
                {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: 'green',
                        width: 5
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        label: { show: false },
                        data: [
                            { xAxis: 1 },
                            { xAxis: 3 },
                            { xAxis: 5 },
                            { xAxis: 7 }
                        ]
                    },
                    areaStyle: {},
                    data: [
                        ['2019-10-10', 200],
                        ['2019-10-11', 400],
                        ['2019-10-12', 650],
                        ['2019-10-13', 500],
                        ['2019-10-14', 250],
                        ['2019-10-15', 300],
                        ['2019-10-16', 450],
                        ['2019-10-17', 300],
                        ['2019-10-18', 100]
                    ]
                }
            ]
        };
    }

    getRightChart2Option = () => {
        return {
            grid: {
                x: 25,
                y: -10,
                x2: 45,
                y2: 20
            },
            title: {  //标题组件
                text: '',
                textStyle: {
                    color: '#000',  //文字颜色
                    fontStyle: 'normal',  //字体风格：'normal','italic','oblique'
                    fontWeight: 'normal', //字体粗细 ：'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontFamily: 'sans-serif',//字体系列： 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
                    fontSize: 12, //字体大小
                },
                x: 'center',
                top: '66%',
            },
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [
                {
                    pointer: {
                        width: 5,//指针的宽度
                        length: "60%", //指针长度，按照半圆半径的百分比
                        shadowColor: '#ccc', //默认透明
                        shadowBlur: 5
                    },
                    name: '分区(/)使用率',
                    radius: '90%',
                    axisLine: {      //仪表盘轴线相关配置
                        show: true,
                        lineStyle: {
                            color: [  //仪表盘背景颜色渐变
                                [0.6, "#289728"],
                                [0.8, "#ff7300"],
                                [1, "#FF0000"]
                            ],
                            width: 12,  //轴线宽度
                        },
                    },
                    axisLabel: {  // 刻度标签
                        show: false,
                        fontSize: 10,   //改变仪表盘内刻度数字的大小
                        shadowColor: '#000', //默认透明
                        distance: -12
                    },
                    type: 'gauge',
                    detail: {				// 仪表盘详情，用于显示数据。
                        show: true,				// 是否显示详情,默认 true。
                        offsetCenter: [0, "43%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                        color: '#000000',
                        fontWeight: '700',
                        fontSize: '14',
                        formatter: '{value}%',	// 格式化函数或者字符串
                    },
                    data: [{ value: 50, name: '跳出率' }]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={18}>
                        <Card title="活动实时交易情况" style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Statistic title="今日交易总额" value={124543233} suffix="元" />
                                </Col>
                                <Col span={6}>
                                    <Statistic title="销售目标完成率" value={92} suffix="%" />
                                </Col>
                                <Col span={6}>
                                    <Countdown title="活动剩余时间" value={deadline} format="HH:mm:ss:SSS" />
                                </Col>
                                <Col span={6}>
                                    <Statistic title="每秒交易总额" value={234} suffix="元" />
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <div style={{ height: 400, paddingTop: 30, paddingRight: 140 }} id="chart-container"></div>
                                </Col>
                            </Row>
                        </Card>

                        <div style={{marginBottom: 15}}></div>

                        <Card title="各品类占比" style={{ width: '100%' }}>
                            <Row>
                                <Col span={24}>
                                    <div style={{ height: 230, paddingRight: 150 }} id="proportion-chart-container"></div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    
                    <Col span={6}>
                        <Card title="活动情况预测" style={{ width: '100%', marginBottom: 15 }}>
                            <div style={{ height: 200, paddingTop: 10 }} id="forecast-chart-container"></div>
                        </Card>

                        <Card title="券核效率" style={{ width: '100%' }}>
                            <div style={{ height: 200 }} id="rate-chart-container"></div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
