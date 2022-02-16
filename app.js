//selectors

var btnNumber = document.querySelectorAll("#btnNumber");
var screen = document.querySelector(".btn.btn--first");

var btnOpt = document.querySelectorAll("#btnOpt");
var optState = false;
var opt = "";
var final = 0;

// eventlistener direk yapilmaz birden fazla eleman  burda foreach ile herbiri uzerinde gezilecek.
btnNumber.forEach(number => {
  number.addEventListener("click", showNumber);

function showNumber() {
    if(screen.textContent=="0" || optState){
      screen.textContent=""

    }
    screen.textContent+=this.textContent
optState=false
}

});


btnOpt.forEach(operator => {
    operator.addEventListener("click",calculator)
    

    function calculator(){
   optState=true
   var newOpt=this.textContent

switch (opt) {
    case "+":
        screen.textContent=final+Number(screen.textContent)
        break;
    case "-":
        screen.textContent=final-Number(screen.textContent)
        break;
    case "*":
        screen.textContent=final*Number(screen.textContent)
        break;
    case "/":
        screen.textContent=final/Number(screen.textContent)
        break;
 

    default:
        break;
}
final=Number(screen.textContent)
opt=newOpt

    }



});