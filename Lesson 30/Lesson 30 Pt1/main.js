var x = 5;

if (x>5){
    console.log(x + "value is greater than 5");
}else{
    console.log(x + "value is less then 5");
} 

var input = document.getElementById('input_id');

var button = document.getElementById('btn_id');

var text = document.getElementById('text_id');

button.onclick = function(){
    var value = parseInt(input.value);

    if(value > 10){
        text.innerHTML = "input value is greater than 10"
    }
    else if(value < 10){
        text.innerHTML = "input value is less than 10"
    }
    else if(value === 10){
        text.innerHTML = "input value is equal to 10"
    }
}


var input1 = document.querySelector('#input1_id');
var input2 = document.querySelector('#input2_id');
var btn2 = document.querySelector('#btn2_id');
var ans = document.querySelector('#answer');

btn2.addEventListener("click", function(){
    var num1 = parseInt(input1.value) || 0;
    var num2 = parseInt(input2.value) || 0;

    ans.innerHTML = "total" + (num1+num2);
})