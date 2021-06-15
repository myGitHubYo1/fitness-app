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
utils.tost=function(status, timer, text){
  
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






// 挂载到window


window.utils=utils;