require("../css/home.css");
console.log("我是home");



document.ready(function(){
let numBox=document.querySelector(".num-box");
let daySpan=document.querySelector(".daySpan");
let lastSpan=document.querySelector(".lastSpan");
let todayClock=document.querySelector(".todayClock");


    let user = JSON.parse(localStorage.getItem('user'));
    utils.addFooter('home');
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // autoplay:true,
        autoplay: {
          delay: 1000,
           stopOnLastSlide: false,
         disableOnInteraction: true,
    },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
     
        
    


      })        
  
  
   
      function getInfo() {
        $http.get('/headPageInfo?userId=' + user.userId, function (res) {
            // 判断是否成功拿到数据
            if (res.status == 0) {
              numBox.textContent = res.data.rank;
              daySpan.textContent = res.data.punchIn;
              lastSpan.textContent = res.data.insigniaNum;

                //判断是否显示/隐藏 打卡按钮
                // 已经打卡
                if (res.data.isPunch === 'true') {
                  todayClock.style.display = 'none';
                } else {
                  todayClock.style.display = 'block';
                }

            }
        })
    }
    getInfo();

 //点击立即打卡按钮
 todayClock.addEventListener('click', function (ev) {
  //请求后端的打卡接口
  $http.get('/clockIn?userId=' + user.userId, function (res) {
      if (res.status === 0) {
          utils.tost(1, '打卡成功');
          //打卡成功之后 重新拉取首页数据 重新渲染首页的所有数据
          getInfo();
      } else {
          utils.tost(0, res.msg);
      }
  })
})







})