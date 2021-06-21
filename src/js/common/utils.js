/**
 * 工具函数
 */

 /**
 * 页面显示弹出框
 * 
 * @toast  页面的提示弹窗
 * @status number  0:失败 1：成功
 * @text   string  提示信息
 * @timer   Number  S
 */
const utils={}
utils.tost=function(status,text,timer=1){
  
 let tost=document.createElement("div");
     tost.className='tost';
   
  let html=`<div class="icon">
  ${status===1?'√':'!'}
</div>
<div class="tost-text">
  ${text}
</div>`
tost.innerHTML=html;
document.querySelector("body").appendChild(tost);
// 定时删除自己
setTimeout(function(){
  tost.remove();
},timer*1000)

}

utils.addFooter=function(page){
let footer=document.createElement("div");
footer.className="footer";
let html=`
<!-- 底部 -->
<div class="footer">
    <!-- 首页盒子 -->
    <a href="home.html">
    <div class="${page==='home'?'index-box active':'index-box'}">
       <div><i class="iconfont iconhome"></i></div>
       <span>首页</span>
    </div></a>
    
    <!-- 运动盒子 -->
    <a href="sports.html"><div class="${page==='sports'?'index-box active':'index-box'}">
        <div><i class="iconfont iconsports"></i></div>
        <span>运动</span>
    </div></a>
    
    <!-- 我的 -->
    <a href="about.html"><div class="${page==='about'?'index-box active':'index-box'}">
        <div><i class="iconfont iconmine"></i></div>
        <span>我的</span>
    </div></a>
    
</div>
`
footer.innerHTML=html;
document.querySelector("body").appendChild(footer);

}



utils.characterFn=function(str){
 
let obj={};
// let str="?name=zhangsan&id=555"
 let str1=str.substr(1);//name=zhangsan&id=555
  let str2Arr=str1.split("&");
  str2Arr.forEach(function(item){
      let arr3=item.split("=");
    //   console.log(arr3);
      obj[arr3[0]]=arr3[1];
      
  })
  return obj;
}





    /**
     * @dateFormat   将格林威治时间转换为 本地北京时间格式
     * @date   Date()  格林威治时间
     * @return String  2021-06-06 15:15:00
     */

    utils.dateFormata=function (date) {
        //年
        let y = date.getFullYear();
        //月
        let m = parseInt(date.getMonth()) + 1;
        //日
        let d = date.getDate();
        // //小时
        // let h = date.getHours();
        // //分钟
        // let min = date.getMinutes();
        // //秒
        // let s = date.getSeconds();
        //三目运算符 添 0 补齐
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        // h = h < 10 ? '0' + h : h;
        // min = min < 10 ? '0' + min : min;
        // s = s < 10 ? '0' + s : s;
        let str = `${y}-${m}-${d}`;
        return str;
    }

    utils.numAdd=function(num){
        let str=num;
        if(num<10){
            str='0'+num;
        }
        return str;
    }

    
// 挂载到window


window.utils=utils;