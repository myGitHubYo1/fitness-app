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

// 定义全局变量  对象
let datas={
    nickname:'',
    gender:'',
    birthday:'',
    pro:'',
    city:''
}
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
            birthdayText.textContent=`${result[0].value}-${result[1].value}-${result[2].value}`
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











})