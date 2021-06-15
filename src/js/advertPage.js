require("../css/advertPage.css");
console.log("advertPage");


// 立即执行一下代码
document.ready(function(){
//获取元素对象
  let timeBox=document.querySelector(".timeBox span");
  let  textDom=document.querySelector(".skip-box");

//   定时器
  let timeId=setInterval(function(){
      if((timeBox.textContent)-1===0){
          clearInterval(timeId);
          location.href='./registerPage.html';
      }else{
          let num=parseInt(timeBox.textContent)-1;
      timeBox.textContent=num; 
      }         
  },1000)
  
// 监听事件
textDom.addEventListener("click",function(){
    location.href='./registerPage.html';
})


})