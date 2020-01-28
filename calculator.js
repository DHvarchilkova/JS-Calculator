function addNumbers(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let sum = parseInt(number1) + parseInt(number2);
    result = document.getElementById("result");
    result.innerHTML = sum;
}