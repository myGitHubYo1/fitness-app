require('../css/login.css');
console.log("我是login");




document.ready(function(){

//获取元素对象
let nameInp=document.querySelector(".nameInp");
let pwdInp=document.querySelector(".pwdInp");

let btn=document.querySelector(".btn");
let pBox=document.querySelector(".register-box");

btn.addEventListener("click",function(){
  let data={
    account:nameInp.value,
    password:pwdInp.value
  }
$http.post("/users/login",data,function(res){
    console.log(res);
    
    if(res.status===0){
        utils.tost(1, 1, '登录成功');
        // 将数据存储到本地
        localStorage.setItem("user",JSON.stringify(res.data.user));
        location.href='./home.html';
    }else{
        utils.tost(0, 1, '用户密码或账号错误,请重新登录');
    }




})
})

pBox.addEventListener("click",function(){
    location.href='./registerPage.html';
}) 






})