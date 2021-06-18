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






// 挂载到window


window.utils=utils;