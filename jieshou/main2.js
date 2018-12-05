var Shopping;

var xhr=new XMLHttpRequest();
xhr.open('GET','test.json');
xhr.responseType = 'json';
xhr.onload = function() {
    if(xhr.status === 200) {
        Shopping = xhr.response;
      initialize();
    } else {
      console.log("数据出错！请检查>>>"+xhr.status+xhr.statusText);
    }
  };
  xhr.send();
  function initialize(){
console.log(Shopping);
  }