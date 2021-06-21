require('../css/sports.less');
document.ready(function(){
    utils.addFooter('sports');

  function courseFn(){
    let user=JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    
    let newcourseDom=document.querySelector(".video-boxs");
    let videoMenu=document.querySelector(".video-menu");
    let urlAdd='http://139.9.177.51:8099';
    // // 请求接口
    $http.get("/sports/courseList?id="+user.userId,function(res){
   console.log(res);
     let data=res.data;
       let datas=data.find(function(item){
           return item.latest==1;
       })
    //    console.log(datas);
       
      let courseHtml=`
      <a href="./introduction.html?id=${datas.courseId}"><div class="video"><img src="${urlAdd+datas.imgurl}"></div>
                <div class="video-text">
                    <p>${datas.name}</p>
                    <p class="text">${datas.desc}</p>
                </div></a>

      `
      newcourseDom.innerHTML=courseHtml;



    let newHtml='';
      // 循环遍历
    data.forEach(function(item){
        newHtml+=`
        <a href="./introduction.html?id=${item.courseId}">
        <div class="video-menu1">
           <div class="img-box"> <img src="${urlAdd+item.imgurl}"></div>
                <p class="p1">${item.name}</p>
                <p class="p2">${item.desc}</p>
            </div>
        </a>
        `
   

        
    })
    videoMenu.innerHTML=newHtml;

    })

    


  }
courseFn()






})