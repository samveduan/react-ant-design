import { SnippetsFilled, PieChartFilled, ApiFilled, PieChartOutlined } from '@ant-design/icons';

const MenuList = [
    {
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的path
        icon: SnippetsFilled // 图标名称
    },
    {
        title: '数据录入',
        key: '/data_input',
        icon: PieChartFilled,
        children: [ // 子菜单列表
            {
                title: 'form',
                key: '/form',
                icon: 'bars'
            }
        ]
    },
    {
        title: '数据展示',
        key: '/data_show',
        icon: ApiFilled,
        children: [
            {
                title: 'table',
                key: '/table',
                icon: 'bar-chart'
            },
            {
                title: 'tabs',
                key: '/tabs',
                icon: 'line-chart'
            },
            {
                title: 'card',
                key: '/card',
                icon: 'line-chart'
            },
            {
                title: 'empty',
                key: '/empty',
                icon: 'line-chart'
            },
            {
                title: 'timeline ',
                key: '/timeline',
                icon: 'line-chart'
            },
            {
                title: 'descriptions ',
                key: '/descriptions',
                icon: 'line-chart'
            }
        ]
    },
    {
        title: '反馈',
        key: '/feedback',
        icon: ApiFilled,
        children: [
            {
                title: 'modal',
                key: '/modal',
                icon: 'bar-chart'
            },
            {
                title: 'notification',
                key: '/notification',
                icon: 'line-chart'
            },
            {
                title: 'result',
                key: '/result',
                icon: 'line-chart'
            }
        ]
    },
    {
        title: '图表',
        key: '/charts',
        icon: PieChartOutlined,
        children: [
            {
                title: 'bar',
                key: '/bar',
                icon: 'bar-chart'
            },
            {
                title: 'line',
                key: '/line',
                icon: 'line-chart'
            },
            {
                title: 'pie',
                key: '/pie',
                icon: 'pie-chart'
            }
        ]
    },
    {
        title: '异常页',
        key: '/abnormal',
        icon: PieChartOutlined,
        children: [
            {
                title: '403',
                key: '/403',
                icon: 'bar-chart'
            },
            {
                title: '404',
                key: '/404',
                icon: 'line-chart'
            },
            {
                title: '500',
                key: '/500',
                icon: 'pie-chart'
            }
        ]
    },
    {
        title: '结果页',
        key: '/result',
        icon: PieChartOutlined,
        children: [
            {
                title: '成功',
                key: '/success',
                icon: 'bar-chart'
            },
            {
                title: '失败',
                key: '/fail',
                icon: 'line-chart'
            }
        ]
    }
]

export default MenuList