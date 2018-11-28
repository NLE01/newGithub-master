var btnjia=document.getElementsByName('increase');
console.log(btnjia);
var btnjian=document.getElementsByName('decrease');
console.log(btnjian);
// 为所有的加号注册单击事件
for(let i=0; i<btnjia.length;i++){
    btnjia[i].addEventListener('click',increaseValue);
}
//减号
for(let i=0;i<btnjian.length;i++){
    btnjian[i].addEventListener('click',decreaseValue);
}
function increaseValue(e){
    var qtyObj=  e.target.nextElementSibling;
    var qty=parseInt(qtyObj.innerText);
    qty++;
    qtyObj.innerText=qty;
    console.log(qty);        
}
function decreaseValue(e){
  var qtyObj=  e.target.previousElementSibling;
  var qty=parseInt(qtyObj.innerText);
 if(qty>1) qty--;
 else qty=0;
  qtyObj.innerText=qty;
  console.log(qty);        
}