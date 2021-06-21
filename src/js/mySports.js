require("../css/mySports.css");
const echarts=require("echarts");
document.ready(function(){
   let  spanBtn=document.querySelector(".spanBtn");
let arr=[
    {data:"6-15",time:45},
    {data:"6-16",time:450},
    {data:"6-17",time:405},
    {data:"6-18",time:150},
    {data:"6-19",time:50},
    {data:"6-20",time:90},
    {data:"6-21",time:10},
    {data:"6-22",time:45},
];
let dataArr=[];
let timeArr=[];
arr.forEach(function(item){
    dataArr.push(item.data);
    timeArr.push(item.time)
})


// console.log(Echarts);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '近七日运动时长'
    },
    tooltip: {},
    legend: {
        // data:['销量']
    },
    xAxis: {
        data: dataArr
    },
    yAxis: {},
    series: [{
        // name: '销量',
        type: 'bar',
        data: timeArr
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
var myCharts = echarts.init(document.getElementById('mains'));

// 指定图表的配置项和数据
   var option = {
    title: {
        text: '运动分类',
        // subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '训练'},
                {value: 735, name: '跑步'},
                {value: 580, name: '骑行'}
                // {value: 484, name: '联盟广告'},
                // {value: 300, name: '视频广告'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myCharts.setOption(option);

let arrDay=[
    {data:"6-15",time:5},
    {data:"6-16",time:2},
    {data:"6-17",time:3},
    {data:"6-18",time:1},
    {data:"6-19",time:10},
    {data:"6-20",time:5},
    {data:"6-21",time:9},
    {data:"6-23",time:4},
];
let dataArry=[];
let timeArry=[];
arrDay.forEach(function(item){
    dataArry.push(item.data);
    timeArry.push(item.time)
})


// console.log(Echarts);
// 基于准备好的dom，初始化echarts实例
var myChartss = echarts.init(document.getElementById('mainss'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '近七天训练次数',
        // // subtext: '纯属虚构',
        // left: 'center'
    },
    xAxis: {
        type: 'category',
        data: dataArry
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: timeArry,
        type: 'line'
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChartss.setOption(option);

spanBtn.addEventListener("click",function(ev){
    history.back();
})




})