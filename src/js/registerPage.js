require("../css/registerPage.css");
console.log("6666a");


document.ready(function(){
//  验证码
let telInp=document.querySelector(".telInp");
let textDom=document.querySelector(".verification");
let pwdInp=document.querySelector(".pwdInp");
let aginInp=document.querySelector(".aginInp");
let btn=document.querySelector(".btn");
let textP=document.querySelector(".textP");
let loginBox=document.querySelector(".login-box");


  let identifying=''; 
    let captcha = new CaptchaMini();
    captcha.draw(document.querySelector('#captcha'),function(res){
        console.log(res);
        identifying =res;
    });
    

// 监听事件
btn.addEventListener("click",function(ev){
    // 手机号正则验证
    let reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if(!reg.test(telInp.value)){
        utils.tost(0,'手机号格式错误');
        return;     
      }
    // 密码验证
    let reg1=/^[a-zA-Z]\w{5,17}$/;
    if(!reg1.test(pwdInp.value)){
        utils.tost(0,'密码格式错误');
        return;
    }
    // 两次输入密码验证
    if(pwdInp.value!==aginInp.value){
        utils.tost(0,'两次输入密码不一致');
        return;
    }
    
    // 验证码验证
    if(textDom.value.toLowerCase()!==identifying.toLowerCase()){
        utils.tost(0,'验证码输入错误')
        return;
    }
    let data={account:telInp.value,password:pwdInp.value};
//    请求接口
  $http.post("/users/add",data,function(res){

    if(res.status===0){
        // utils.tost(1,'注册成功');
      

        login(data);
        // location.href='./login.html';
    }else{
        utils.tost(0,'注册失败，请重新注册')
    }
        
  })



  function login(data){

    $http.post("/users/login",data,function(res){
        console.log(res);
        
        if(res.status===0){
            utils.tost(1,'登录成功');
            // 将数据存储到本地
            localStorage.setItem("user",JSON.stringify(res.data.user));
            location.href='./home.html';
        }else{
            utils.tost(0,'用户密码或账号错误,请重新登录');
        }
    
    
    
    
    })

  }
   
})

loginBox.addEventListener("click",function(){
    location.href='./login.html'
})




})