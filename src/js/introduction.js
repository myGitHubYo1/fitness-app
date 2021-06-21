require("../css/introduction.css");
console.log("profile");

document.ready(function(){
//    获取元素对象
let topBox=document.querySelector(".top-box img");
let frePDom=document.querySelector(".freP");
let cloNum=document.querySelector(".cloNum");
let timeBox=document.querySelector(".timeBox");
let descLi=document.querySelector(".descLi");
let nameBox=document.querySelector(".nameBox");
let pBox=document.querySelector(".p-text");
let startBtn=document.querySelector(".startBtn");

  let baseUrl='http://139.9.177.51:8099'
    let str=location.search;
   let obj= utils.characterFn(str);
//    console.log(obj);
    let data=null;
//   请求接口
function fn(){
    $http.get("/sports/courseDetail?id="+obj.id,function(res){
    console.log(res);
    data=res.data;
    topBox.src=baseUrl+res.data.imgurl;
    nameBox.textContent=res.data.name;
    descLi.textContent=res.data.desc;
    cloNum.textContent=res.data.calorie;
    timeBox.textContent=res.data.time;
    frePDom.textContent=res.data.frequency;
    pBox.textContent=res.data.instrument;
})
}
fn()

//   监听事件
topBox.addEventListener("click",function(ev){

    // 
    localStorage.setItem("videoList",JSON.stringify(data.fragments));
    location.href='./player.html'
   

}) 
// 监听事件
startBtn.addEventListener("click",function(ev){
    localStorage.setItem("videoList",JSON.stringify(data.fragments));
    location.href='./player.html';


}) 
   




})