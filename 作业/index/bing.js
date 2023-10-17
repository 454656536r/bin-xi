var myChart = echarts.init(document.getElementById('bings'));
var colorList = ['#3990fd', '#49c988', 'rgb(255, 96, 68)',]
var data = [
    {
        name: '推广大使VIP',
        value: 2000
    },
    {
        name: '宝妈大使',
        value: 2000
    },
    {
        name: '宝妈专员',
        value: 2000
    }
]
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        show: false
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '10%',
        top: 'center',
        itemGap: 20,
        selectedMode: true,
        icon: 'circle',
        textStyle: {
            rich: {
                a1: {
                    color: colorList[1],
                    fontSize: 12,
                    fontWeight: 'bolder'
                },
                a2: {
                    color: colorList[2],
                    fontSize: 12,
                    fontWeight: 'bolder'
                },
                a3: {
                    color: colorList[3],
                    fontSize: 12,
                    fontWeight: 'bolder'
                },
                b: {
                    color: '#000',
                    fontSize: 12,
                    fontWeight: 'bolder'
                }
            }
        },
    },
    series: [
        {
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['60%', '40%'], //数组的第一项是内半径，第二项是外半径
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 30,
            emphasis: {
                itemStyle: {
                    borderColor: '#f3f3f3',
                    borderWidth: 10
                }
            },
            itemStyle: {
                normal: {
                    borderRadius: 1,
                    borderColor: 'rgba(255, 255, 255, 1 )',
                    borderWidth: 2,
                    color: function (params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                show: false,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                rich: {
                    hr: {
                        backgroundColor: 't',
                        borderRadius: 1,
                        width: 1,
                        height: 1,
                        padding: [1, 1, 0, -4]
                    },
                    a: {
                        padding: [-15, 7, -10, 7]
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 15,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: data
        }
    ]
};

myChart.setOption(option);