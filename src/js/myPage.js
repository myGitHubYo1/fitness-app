require("../css/myPage.css");
document.ready(function(){
// console.log(weui);
// 获取元素对象
let genderDom=document.querySelector("#gender");
let genderText=document.querySelector("#genderText");
let birthday=document.querySelector("#birthday");
let birthdayText=document.querySelector("#birthdayText");

let proDom=document.querySelector("#pro");
let proText=document.querySelector("#proText");
let cityDom=document.querySelector("#city");
let cityText=document.querySelector("#cityText");
let nickNameDom=document.querySelector("#nickName");
let signText=document.querySelector("#signText");
let btn=document.querySelector(".btn");
// console.log(petName);

let user=JSON.parse(localStorage.getItem("user"));
// console.log(user);

// 定义全局变量  对象
let datas={
    userId:user.userId,
    nickname:'',
    gender:'',
    birthday:'',
    sign:'',
    pro:'',
    city:''
}

function fn(){

$http.get("/users/accountinfo?userId="+user.userId,function(res){
    
 console.log(res);
 nickNameDom.value=res.data.account;
 datas.nickname=res.data.account;
  
 if(res.data.gender){
    genderText.textContent=res.data.gender;
    datas.gender=res.data.gender;
 }
 if(res.data.birthday){
     let datasTime=new Date(res.data.birthday);
     
    let strTime=utils.dateFormata(datasTime);
    // console.log( utils.dateFormata(datasTime));
   
    birthdayText.textContent=strTime;
    datas.birthday=strTime;
 }
 if(res.data.sign){
    signText.value=res.data.sign;
    datas.sign=res.data.sign;
 }
 if(res.data.address){
     let addressArr=res.data.address.split(",")
    proText.textContent=addressArr[0];
    cityText.textContent=addressArr[1];
 }
 
 

})


}
fn()





// 事件监听   性别

genderDom.addEventListener("click",function(ev){
    weui.picker([{
        label: '男',
        value: 0
    }, {
        label: '女',
        value: 1
    }], {
        onConfirm: function (result) {
            // console.log(result);
            genderText.textContent=result[0].label;
            datas.gender=result[0].label;
        },
        title: '性别'
    });


})

// 事件监听  生日
birthday.addEventListener("click",function(){
    weui.datePicker({
        start: 1949,
        end: new Date().getFullYear(),
       
        onConfirm: function (result) {
            console.log(result);
            birthdayText.textContent=`${result[0].value}-${utils.numAdd(result[1].value)}-${utils.numAdd(result[2].value)}`
            datas.birthday=birthdayText.textContent;
        },
        title: '选择时间'
    });




})

// 事件监听 省份
proDom.addEventListener("click",function(ev){
//    请求接口
$http.get("/address/province",function(res){
    // console.log(res);
    let arr=res.data;
    let arr1=arr.map(function(item){
        return {
            value: item.addressId,
           label:item.name

        }     
    })
    weui.picker(arr1, {
        
        onConfirm: function (result) {
            datas.city='';
            cityText.textContent='请选择';
            proText.textContent=result[0].label;
            datas.pro=result[0];
            
        },
        title: '单列选择器'
    });
})

})
// 事件监听  城市
cityDom.addEventListener("click",function(ev){
  if(datas.pro==''){
      utils.tost(1,'请先填写省份');
      return;
  }
 
//   市请求
$http.get("/address/city/"+datas.pro.value,function(res){
let arr=res.data;
let arr1=arr.map(function(item){
    return {
        value: item.addressId,
       label:item.name
    }     
})
weui.picker(arr1, {
    onConfirm: function (result) {
        // console.log(result);
        cityText.textContent=result[0].label;
        datas.city=result[0]; 
    },
    title: '单列选择器'
});
  
})

})




// 事件监听
btn.addEventListener("click",function(ev){

    datas.nickname=nickNameDom.value;
    // datas.gender=genderText.textContent;
    datas.sign=signText.value;
    datas.birthday=birthdayText.textContent
    if(datas.pro.label&&datas.city.label){
        datas.address=[datas.pro.label,datas.city.label]
    }
    //    datas.pro=proText.textContent
    //    datas.city=cityText.textContent
    // console.log(datas.gender);
    // console.log(datas);
    $http.post("/users/userEdit",datas,function(res){
        //    console.log(res);
        if(res.status==0){
            utils.tost(1,'修改成功');
            location.href='./about.html';
        }else{
            utils.tost(0,'修改失败');
        }
           
    })
  
  
//     // location.href='./about.html';
})









})