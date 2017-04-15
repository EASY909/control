Mock.mock('http://g.cn', {
    "number|4199582.2": 1,
    "sale|2-3.1": 1,
    "market|1-2.1": 1,
    "business|0-1.1": 1,
    "country|0-0.5": 1,
    "extra|0": 0,
});
$.ajax({
    type: "GET",
    url: 'http://g.cn',
    dataType: "json",
    success: function(data) {
        $('.sale-left h2').html(data.number);
        var myChart = echarts.init(document.getElementById('main-left'));
        myChart.setOption({
            title: {
                subtext: '总计'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            barWidth: 15,
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    formatter: '{value}M',
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#36394e'
                    }
                }
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                data: ['番外部', '国家销售部', '电子商务', '市场部', '销售部']
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#878787', '#76ded7', '#eb5f63', '#fb8349', '#e56fb7'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: [data.extra, data.country, data.business, data.market, data.sale]
            }]
        });
    }
});

//顶部第二个图
Mock.mock('http://g.cn2', {
    "number|4199582.2": 1,
    "tao|2-2.1": 1,
    "da|0.5-1": 0.7,
    "yang|0.5-1": 0.5,
    "wang|0.5-1": 0.5,
    "na|0-0.2": 0.2,
    "ming|0-0.1": 0.1,
    "ai|0-0": 0,
});
$.ajax({
    type: "GET",
    url: 'http://g.cn2',
    dataType: "json",
    success: function(data) {
        $('.sale-right h2').html(data.number);
        var myChart = echarts.init(document.getElementById('main-right'));
        myChart.setOption({
            title: {
                subtext: '总计'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            barWidth: 15, //柱图宽度
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    formatter: '{value}M',
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#36394e'
                    }
                }
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                data: ['张爱', '舒小名', '何娜', '王民', '李阳', '刘天达', '余涛'],

            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#878787', '#6260f3', '#6260f3', '#8a53b9', '#9c55b8', '#9d4ea1', '#f53b3f'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: [data.ai, data.ming, data.na, data.wang, data.yang, data.da, data.tao]
            }]
        });
    }
});
// 第二部分
Mock.mock('http://second', {
    "sale|4199582.2": 1,
    "profit|194743.2": 1,
    "area": 15,
    "customer": 22,
});
$.ajax({
    type: "GET",
    url: 'http://second',
    dataType: "json",
    success: function(data) {
        console.log(data.sale)
        $('.total .total-sale h2').html(data.sale);
        $('.total .total-profit h2').html(data.profit);
        $('.total .total-area h2').html(data.area);
        $('.total .total-customer h2').html(data.customer);
    }
});

// 第三部分 收益左
Mock.mock('http://third-left', {
    "one|1-1.1": 1.6,
    "two|1-1.1": 1,
    "three|0.5-1": 1,
    "four|0.4-1": 1,
    "five|0.4-1": 1,
    "six|0.2-1": 1,
    "seven|0.2-1": 0.2,
    "eight|0.1-1": 0.2,
    "nine|0.1-1": 0.1,
    "ten|0.05": 0.05,
    "eleven|0": 0,

    "p_one|-21-60": 1,
    "p_two|-21-60": 1,
    "p_three|-21-60": 1,
    "p_four|-21-60": 1,
    "p_five|-21-60": 1,
    "p_six|-21-60": 1,
    "p_seven|-21-60": 1,
    "p_eight|-21-60": 1,
    "p_nine|-21-60": 1,
    "p_ten|-21-60": 1,
    "p_eleven|-21-60": 1,
});
$.ajax({
    type: "GET",
    url: 'http://third-left',
    dataType: "json",
    success: function(data) {
        console.log(data.five)
        var myChart = echarts.init(document.getElementById('income-left'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {

                orient: 'vertical',
                x: 'right',
                data: ['外购产成品', '手机原材料']
            },
            barWidth: 20,
            xAxis: [{
                type: 'category',
                data: ['备产品收益', '通讯类收益', '自研收益', 'pc产品收益', '手机产品收益', '办公用品', '条码管理', '自制半成品', '设备管理服务', '采购半成品', '服务类'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40,
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                }
            }],
            yAxis: [{
                splitLine: { show: false },
                type: 'value',
                min: 0,
                max: 1.6,
                interval: 0.4,
                axisLabel: {
                    formatter: '{value}M',
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#36394e'
                    }
                }
            }, {
                type: 'value',
                name: '利润',
                min: -21,
                max: 61,
                interval: 20,
                axisLabel: {
                    formatter: '{value}K',
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '订单金额',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#7260af'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: [data.one, data.two, data.three, data.four, data.five, data.six, data.seven, data.eight, data.nine, data.ten, data.eleven]
            }, {
                name: '利润',
                symbol: 'none',
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#c1bec7'
                        }
                    }
                },
                smooth: true,
                yAxisIndex: 1,
                data: [data.p_one, data.p_two, data.p_three, data.p_four, data.p_five, data.p_six, data.p_seven, data.p_eight, data.p_nine, data.p_ten, data.p_eleven]
            }]
        };
        myChart.setOption(option);
    }

});
// 收益右
Mock.mock('http://third-right', {
    "one|20-50": 1,
    "two|20-50": 1,
    "three|1400-1550": 1,
    "four|1400-1550": 1,
    "five|300-400": 1,
    "six|200-300": 1,
    "seven|300-310": 1,
    "eight|220-250": 1,
    "nine|100-200": 1
});
$.ajax({
    type: "GET",
    url: 'http://third-right',
    dataType: "json",
    success: function(data) {
        console.log(data.one)
        var myChart = echarts.init(document.getElementById('income-right'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                itemWidth: 4,
                itemHeight: 4,
                align: 'left',
                textStyle: { "color": "#c1bec7" },
                orient: 'vertical',
                x: 'right',
                data: ['外购产成品', '手机原材料', '办公用品', '自制产成品', 'pc原材料', '设备备件', '外购产成品', '自制产成品', '劳务类']
            },
            series: [{
                name:'备产品利润',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: data.one, name: '外购产成品' },
                    { value: data.two, name: '手机原材料' },
                    { value: data.three, name: '办公用品' },
                    { value: data.four, name: '自制产成品' },
                    { value: data.five, name: 'pc原材料' },
                    { value: data.six, name: '设备备件' },
                    { value: data.seven, name: '外购产成品' },
                    { value: data.eight, name: '自制产成品' },
                    { value: data.nine, name: '劳务类' }
                ],
                color: ['#5182e4', '#adde9e', '#5081e2', '#3eb27e', '#ff8a4a', '#ff6668', '#875cee', '#fa76c5', '#ffdc67']
            }]
        };
        myChart.setOption(option);


        // myChart.on('mouseover', function() {
        //     var opt = myChart.getOption();
        //     opt.title.visible = false;
        //     myChart.setOption(opt); }).on('mouseout', function() {
        //     var opt = myChart.getOption();
        //     opt.title.visible = true;
        //     myChart.setOption(opt); 
        //    })
    }
});


//第四部分存货左

Mock.mock('http://four-left', {
    "one|20-50": 1,
    "two|20-50": 1,
    "three|200-250": 1,
    "four|1400-1550": 1,
    "five|300-400": 1,
    "six|300-310": 1,
    "seven|300-310": 1,
    "eight|20-50": 1,
    "nine|20-50": 1,
    "ten|20-50": 1,
    "eleven|20-50": 1,
});
$.ajax({
    type: "GET",
    url: 'http://four-left',
    dataType: "json",
    success: function(data) {
        console.log(data.one)
        var myChart = echarts.init(document.getElementById('goods-left'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                textStyle: { "color": "#c1bec7" },
                itemWidth: 4,
                itemHeight: 4,
                align: 'left',
                color: '#fff',
                orient: 'vertical',
                x: 'right',
                data: ['自制产成品', '通讯设备类', '备货管理', '手机原材料', 'pc原材料', '办公用品', '外购产成品', '自制产成品', '设备备品材料', '外购半成品', '劳务类']
            },
            series: [{
                name:'存货类型',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: data.one, name: '自制产成品' },
                    { value: data.two, name: '通讯设备类' },
                    { value: data.three, name: '备货管理' },
                    { value: data.four, name: '手机原材料' },
                    { value: data.five, name: 'pc原材料' },
                    { value: data.six, name: '办公用品' },
                    { value: data.seven, name: '外购产成品' },
                    { value: data.eight, name: '自制产成品' },
                    { value: data.nine, name: '设备备品材料' },
                    { value: data.ten, name: '外购半成品' },
                    { value: data.eleven, name: '劳务类' },
                ],
                color: ['#5182e4', '#adde9e', '#3eb27e', '#5182e4', '#ff8a4a', '#ff6668', '#875cee', '#fa76c5', '#ffdc67', '#875cee', '#3eb27e']
            }]
        };
        myChart.setOption(option);
    }
});
//第四部分 存货右
Mock.mock('http://four-right', {
    "one|1-1.1": 1.6,
    "two|1-1.1": 1,
    "three|0.5-1": 1,
    "four|0.4-1": 1,
    "five|0.4-1": 1,
    "six|0.2-1": 1,
    "seven|0.2-1": 0.2,
    "eight|0.1-1": 0.2,
    "nine|0.1-1": 0.1,
    "ten|0.05": 0.05,
    "eleven|0": 0,

});
$.ajax({
    type: "GET",
    url: 'http://four-right',
    dataType: "json",
    success: function(data) {
        $('.goods .goods-right h2').html(data.number)
        var myChart = echarts.init(document.getElementById('goods-right'));
        var option = {
            title: {
                subtext: '2015年1月9日'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#9c8eb9'
                    }
                }
            },
            barWidth: 20,
            xAxis: {
                type: 'category',
                data: ['2015年1月5日', '2015年2月6日', '2015年3月7日', '2015年4月5日', '2015年5月5日', '2015年6月5日', '2015年7月5日', '2015年8月5日', '2015年9月5日', '2015年10月5日', '2015年11月5日'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    formatter: '{value}',
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1.6,
                interval: 0.4,
                axisLabel: {
                    formatter: '{value}M',
                    show: true,
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#36394e'
                    }
                }
            },
            series: {
                name: '订单金额',
                symbol: 'none',
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#c1bec7'
                        }
                    }
                },
                smooth: true,
                data: [data.one, data.two, data.three, data.four, data.five, data.six, data.seven, data.eight, data.nine, data.ten, data.eleven]
            }
        };
        myChart.setOption(option);
    }

});

//第五部分 地区
Mock.mock('http://five-left', {
    'number|2115818.2': 1,
    "one|500-700": 1,
    "two|200-300": 1,
    "three|200-300": 1,
    "four|200-250": 1,
    "five|200-250": 1,
    "six|200-250": 1,
    "seven|100-120": 0.2,
    "eight|100-120": 0.2,
    "nine|50-100": 0.1,
    "ten|50-100": 0.05,
});
$.ajax({
    type: "GET",
    url: 'http://five-left',
    dataType: "json",
    success: function(data) {
        $('.area .area-left h2').html(data.number)
        console.log(data.five)
        var myChart = echarts.init(document.getElementById('area-left'));
        var option = {
            title: {
                subtext: '总计'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 640,
                interval: 180,
                axisLabel: {
                    formatter: '{value}K',
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                splitLine: {
                    show: false
                },
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: '#4f5264'
                    }
                },
                data: ['北京公司', '南京公司', '华山公式', '天乐电子集团', '世纪天成集团公司', '中国电子科技', '大地电子科技公司', '星空电子公司', '集合科技集团', '北京天成科技公司']
            },
            barWidth: 20,
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#3571d2', '#3571d2', '#3571d2', '#3571d2', '#3571d2', '#3571d2', '#376ac5', '#5161af', '#5f5ca6', '#f53b3f'

                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: [data.ten, data.nine, data.eight, data.seven, data.six, data.five, data.four, data.three, data.two, data.one]
            }]
        };
        myChart.setOption(option);
    }

});
//地图
var myChart = echarts.init(document.getElementById('area-right'));
myChart.showLoading();
$.get('js/liaoning.json', function(liaoningJson) {
    myChart.hideLoading();

    echarts.registerMap('liaoning', liaoningJson);

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (M)'
        },
        visualMap: {
            min: 800,
            max: 10000,
            itemWidth: 15,
            itemHeight: 80,
            orient: 'horizontal',
            left: 'left',
            text: ['订单金额'],
            textStyle: {
                color: '#656772'
            },
            inRange: {
                color: ['#343752', '#4e48df', '#96388a', '#ca2841']
            }
        },
        series: [{
            name: '辽宁地区销售额',
            type: 'map',
            mapType: 'liaoning',
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    borderColor: '#24273e'
                },
                emphasis: { label: { show: true } }
            },
            data: [
                { name: '沈阳市', value: 0 },
                { name: '大连市', value: 7000 },
                { name: '鞍山市', value: 0 },
                { name: '抚顺市', value: 7000 },
                { name: '本溪市', value: 0 },
                { name: '丹东市', value: 0 },
                { name: '锦州市', value: 0 },
                { name: '营口市', value: 0 },
                { name: '阜新市', value: 3500 },
                { name: '辽阳市', value: 0 },
                { name: '盘锦市', value: 0 },
                { name: '铁岭市', value: 3500 },
                { name: '朝阳市', value: 3500 },
                { name: '葫芦岛市', value: 3500 }
            ]
        }]
    });
});
