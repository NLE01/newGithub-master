// var timer =window.setInterval(changeNum,1000);
var timer;//设计定时器变量
//启动定时器函数定义

function startTimer(speed){
timer=window.setInterval(changeNum,1000);
}
startTimer(100);

//获取h2元素
var h2obj =document.querySelector('h2');
var imgObj=document.querySelector('h2>img');
console.log(h2obj);

//设置当前变化的号码变量及初值
var currentNo=1;

//定义变化数字函数，0--》9，到达9后变化到0

function changeNum(){
    if(currentNo < 8)currentNo++;
    else currentNo=1;
    h2obj.innerHTML='<img src="images/0'+currentNo+'.jpg" alt=""></img> '
    }
    //获取控制按钮
var btnObj=document.getElementById('btnObj')

//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function startChange(){
    startTimer(500);
    btnObj.textContent="停止";
}
//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange(){
    window.clearInterval(timer);
    btnObj.textContent="启动"
}
//为按钮添加鼠标移入移出事件
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);

// var h2obj=document.querySelector('h2');
// console.log(h2obj);
// var currentNo=0;
// function changeNum(){
//     if(currentNo<3)currentNo++;
//     else currentNo=0;
//     h2obj.textContent=currentNo;
//     console.log(currentNo);
// }
// console.log(timer);
// var btnObj=document.getElementById('btnOjb')
// console.log(h2obj);
// var currentNo=0;
// var flag=true;
// fuction changeNum(){
//     if(flag){
//         window.clearInterval(timer);
//         btnObj
//     }
// }