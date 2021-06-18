require('../css/about.less');
document.ready(function(){
    utils.addFooter('about');
//   获取元素对象
let btnDom=document.querySelector(".btn");
let user=JSON.parse(localStorage.getItem('user'));
// console.log(user);
let imgUrlAs='http://139.9.177.51:8099'
let pBox=document.querySelector(".pBox");
let userSpan=document.querySelector(".user-span");
let ptoDom=document.querySelector(".pto img");


let numbersDom=document.querySelector(".numbers");
let numbers2=document.querySelector(".numbers2");
let portrait=document.querySelector(".portrait");


let fileBtn=document.querySelector(".fileBtn");
// 监听事件
fileBtn.addEventListener("change",function(res){
    // console.log(this.files[0]);
    // 请求ajax
    $updateFile("/users/upload",'imgurl',this.files[0],function(res){
    //   console.log(res);
    let resData={
        imgurl:imgUrlAs+res.data,
        userId:user.userId
    }
    if(res.status==0){
        // ptoDom.src=imgUrlAs+res.data
       
        editImg(resData);
    }
      
    }) 
})
ptoDom.addEventListener("click",function(ev){
    fileBtn.click();
    ev.stopPropagation();
})



// 监听事件
btnDom.addEventListener("click",function(ev){

localStorage.removeItem('user');
location.href='./login.html';




})

// 请求接口
function userInfo(){

    $http.get("/users/accountinfo?userId="+user.userId,function(res){
        // console.log(res);
        if(res.status==0){
            if(res.data.nickname){
                userSpan.textContent=res.data.nickname;
            }
            if(res.data.sign){
                pBox.textContent=res.data.sign;
            }
            if(res.data.imgurl){
                ptoDom.src=res.data.imgurl;
                



            }
        }
        
    })

}
userInfo()

function sports(){
    $http.get("/users/mysportsBadge?userId="+user.userId,function(res){
        //    console.log(res);
        if(res.status==0){
            if(res.data.sports.times){
                numbersDom.textContent=res.data.sports.times;
            }
            if(res.data.sports.calorie){
                numbers2.textContent=res.data.sports.calorie;
            }
        }

           
           
    })


}
sports();

// 事件监听
portrait.addEventListener("click",function(ev){

location.href='./myPage.html'

})


function editImg(data){

$http.post("/users/userEdit",data,function(res){
    
    ptoDom.src=data.imgurl;
    utils.tost(1,'上传成功');
})

}



})