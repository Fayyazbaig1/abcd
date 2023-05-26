var display = document.getElementById("display");

function getvalue(num){
display.value += num;
console.log(display.value);
}

function calculatevalue (ans){
var ans = eval(display.value);
console.log(ans);
display.value = ans;
}

function clearAll(){
display.value = "";
}