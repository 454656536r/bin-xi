var myChart = echarts.init(document.getElementById('boxian'));
option = {
    backgroundColor: '#fff',
    title: {
        text: '单位(元)',
        left: '12%',
        top: '13%',
        textStyle: {
            color: '#000',
            fontSize: 14,
            top:50,
        }
    },
    legend: {
        show: true,
        icon: 'circle',
        top: '13%',
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 25,
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G','A', 'B', 'C', 'D', 'E', 'F', 'G','A', 'B', 'C', 'D', 'E', 'F', 'G','A'],
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#c56790'
            },
            margin: 15
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#c56790'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: 'S',
        type: 'line',
        data: [250,0,50,630,0,500,170,150,240,0,210,370,0,0,400,0,0,200,0,0,100,0],
        symbolSize: 6,
        symbol: 'circle',
        smooth: true,
        lineStyle: {
            color: 'rgb(0, 255, 17)'
        },
        itemStyle: {
            normal: {
                color: 'rgb(0, 255, 17)',
                borderColor: 'rgb(0, 255, 17)'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(142, 255, 150)'
                    },
                    {
                        offset: 1,
                        color: '#fff'
                    }
                ])
        },
        emphasis: {
            itemStyle: {
                color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: '#fe9a8b'
                            },
                            {
                                offset: 0.4,
                                color: '#fe9a8b'
                            },
                            {
                                offset: 0.5,
                                color: '#fff'
                            }, {
                                offset: 0.7,
                                color: '#fff'
                            }, {
                                offset: 0.8,
                                color: '#fff'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }
                        ]
                    },
                    borderColor: '#fe9a8b',
                    borderWidth: 2
            }
        }
    }
    ]
};
myChart.setOption(option);