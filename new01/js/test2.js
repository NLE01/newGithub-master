// css选择器--document.querySelector()
var img4 =document.querySelector('#images>a:nth-child(4)');
// ID--document,getElementById()
var img4=document.getElementById('images').children[4];
// 类名--document.getElementsByClassName()
var img4=document.getElementsByClassName('hiddenImg')[3];
// 标签名--document.getElementsByTagName
var img4=document.getElementsByTagName('a')[4];

console.log(img4);
// 获取一组带超链接的图像

var imagesA=document.getElementById("images").children;
console.log(imagesA);

// 行内元素实现换显示样式
imagesA[0].style.display='none';
imagesA[4].style.display='block';

console.log(imagesA[4].className);

// 通过更换css类名来实现更换样式
imagesA.className='hiddenImg';
imagesA.className='displayImg';

// 利用计时器间隔1s，显示1张图像，其余图像隐藏。
var currentNo=0;
function changeImg(){
    // 排他原理，先去掉同类，在突出自己
    for(var i=0; i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }
    // 或者
    // for(const item of imagesA){
        // item.className="hiddenImg"
    // }
    // 再突出自己
    imagesA[currentNo].className="displayImg";
    // 换个元素，为下次计时器调用做准备
    if(currentNo<7){currentNo++}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}

var timer =window.setInterval(changeImg,1000);
function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
    timer=window.setInterval(changeImg,1000);
}


var imagesDiv=document.getElementById("images");
console.log(imagesDiv);
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout',startChange);