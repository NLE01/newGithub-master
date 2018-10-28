// var randomNumber =Math.floor((Math.random()*101));
var randomNumber =9;
// console.log(randomNumber);

// var guessField=document.querySelector('#guessField');
// console.log(guessField)
// console.log(guessField.type)

var guessField=document.querySelector('.guessField');
var guesses=document.querySelector('.guesses');
var lastResult=document.querySelector('.lastResult');
var guessSubmit=document.querySelector('.guessSubmit');
var lowOrHi=document.querySelector('.lowOrHi');

var guessCount=1;
var resetButton;
guessField.focus();

function checkGuess(){
    // document.write('我是结论');
    // var x=new Number(123.45);
    var userGuess=Number(guessField.value);
    // console.log(typeof userGuess);
    // console.log(userGuess);
    // guesses.innerHTML+=guessField.value+" ";
    // guesses.style.backgroundColor='red';

    if(guessCount === 1) {
        guesses.textContent = '上次猜的数: ';
      }

      guesses.textContent+=userGuess+' ';

      if(userGuess === randomNumber) {
        lastResult.textContent = '恭喜你！猜对了！';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent=' ';
        setGameOver();
    }
     else if(guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = ' ';
        setGameOver();
     }
     else{
          lastResult.textContent = '你猜错了！';

        lastResult.style.backgroundColor = 'red';
        

        if(userGuess < randomNumber) {
            lowOrHi.textContent = '刚才你猜低了！';
          } 
          else if(userGuess > randomNumber) {
            lowOrHi.textContent = '刚才你猜高了！';
          }
        }
    
  //猜数自增
  guessCount++;
  //清空文字区  
  guessField.value = '';
  //文字输入区获得焦点
  guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);
function setGameOver()
{
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
    // var resetButtonP=document.querySelector("div.resultParas p:last-child");
    // console.log(resetButtonP);
    // resetButtonP.style.display="block";
}

function resetGame(){

}



