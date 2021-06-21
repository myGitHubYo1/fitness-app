require('../css/player.less');
document.ready(function () {

    let videoList = JSON.parse(localStorage.getItem('videoList'));
    // console.log(videoList);
    let baseUrl = 'http://139.9.177.51:8099'
    //获取dom
    let imgBoxDom=document.querySelector(".imgBox img");
    let videoDom = document.querySelector('video');
    let currentDom = document.querySelector('.current');
    let titleDom = document.querySelector('.title');

    let preBtn = document.querySelector('#pre');
    let nextBtn = document.querySelector('#next');

    let progressBox = document.querySelector('.progress-box');

    let stopBtn = document.querySelector('#stop');
    let modalDom = document.querySelector('.modal');
    let contiuneBtn = document.querySelector('.contiune');
    let endBtn = document.querySelector('.end');
    let lastP=document.querySelector(".lastP");

    //修改视频总数
    document.querySelector('.all').textContent = videoList.length;

    //当前播放的视频是第几个 相当于索引
    let index = 0;

    //播放视频
    function play(index) {

        // 更改 video 标签 src 属性值 猛板层图片地址 和标题
        videoDom.src = baseUrl + videoList[index].videoUrl;
        imgBoxDom.src= baseUrl+ videoList[index].imgUrl;
        lastP.textContent=videoList[index].title;
        // 修改当前播放的视频
        currentDom.textContent = index + 1;
        //修改标题
        titleDom.textContent = videoList[index].title;
    }
    play(index);




    //事件监听
    // 下一个视频
    nextBtn.addEventListener('click', function (ev) {
        //如果视频没有到最后一个 切换
        if (index < videoList.length - 1) {
            index = index + 1;
            play(index);
        }
    })


    //上一个视频
    preBtn.addEventListener('click', function (ev) {
        //如果视频没有到第一个， 切换
        if (index != 0) {
            index = index - 1;
            play(index);
        }
    })

    //自动播放 完成之后播放下一个视频
    videoDom.addEventListener('ended', function (ev) {
        //如果视频没有到最后一个 切换
        if (index < videoList.length - 1) {
            index = index + 1;
            play(index);
        }
    })

//定时器间隔获取当前时间：更改进度条的宽度   
// 进度条宽度 = （当前播放时间/总时间（视频播放的时间））*100%
    setInterval(function () {
        let proWidth = (videoDom.currentTime / videoDom.duration) * 100;
        proWidth = proWidth + '%';
        progressBox.style.width = proWidth;
    }, 60)


    //暂停播放
    stopBtn.addEventListener('click', function (ev) {
        //停止视频的播放
        videoDom.pause();
        //显示蒙层
        modalDom.style.display = 'block';
        
    })
    //继续播放
    contiuneBtn.addEventListener('click', function (ev) {
        //开始视频的播放
        videoDom.play();
        //隐藏蒙层
        modalDom.style.display = 'none';
    })
    //停止播放
    endBtn.addEventListener('click', function (ev) {
        //跳转页面-列表
        location.href = './sports.html'

        // //详情页
   
        // history.back();
    })



})