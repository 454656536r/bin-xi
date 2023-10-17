var myChart = echarts.init(document.getElementById('fenx'));
var  getname=['8:00-9:00','9:00-10:00','10:00-11:00','11:00-12:00','其他时间'];
var  getvalue=[16,34,18,40,30];


option = {
    title: {
    subtext: '',
        subtextStyle: {
            color: 'rgba(0,0,0,0.65)',
            fontSize: 18
        },
	itemGap: 20,
    left: 'center',
    bottom: '2%'
	},
    grid: {
        top: '10%',
        right: '5%',
        left: '5%',
        bottom: '10%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        extraCssText:'background:#ffffff;color:#666666',
    },
    legend: {
        type: "scroll",
        right: '5%',
        top: '10',
        data: ['现场报到人数'],
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
            color: '#666666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
			interval: 0,  
            margin: 10,
            color: 'rgba(0,0,0,0.45)',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#0FBA77',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name:'单位(笔)',
        nameTextStyle: {
            color: 'rgba(0,0,0,0.45)',
            fontSize: 13,
            padding: [20, 20, 0, 0]
        },
        axisLabel: {
            color: 'rgba(0,0,0,0.45)',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'#0FBA77',
                opacity:0.2
            }
        }
    }],
	animation: false,
    series: [{
        name: '',
        type: 'bar',
        data: getvalue,
        barWidth: '32px',
        itemStyle: {
            normal: {
                color: 'rgb(74, 255, 195)',
                barBorderRadius: [100, 100, 0, 0],
            }
        },
    }]
};
myChart.setOption(option);