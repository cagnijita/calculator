function sum() {
    let numOne , numTwo , sum ;
    numOne = Number(document.getElementById("firstNum").value);
    numTwo = Number(document.getElementById("secondNum").value);
    sum = numOne + numTwo ;
    document.getElementById("res").value = sum ;
}
function diff() {
    let numOne , numTwo , diff ;
    numOne = Number(document.getElementById("firstNum").value);
    numTwo = Number(document.getElementById("secondNum").value);
    diff = numOne - numTwo ;
    document.getElementById("res").value = diff ;
}
function mul() {
    let numOne , numTwo , mul ;
    numOne = Number(document.getElementById("firstNum").value);
    numTwo = Number(document.getElementById("secondNum").value);
    mul = numOne * numTwo ;
    document.getElementById("res").value = mul ;
}
function div() {
    let numOne , numTwo , div ;
    numOne = Number(document.getElementById("firstNum").value);
    numTwo = Number(document.getElementById("secondNum").value);
    div = numOne / numTwo ;
    document.getElementById("res").value = div ;
}
function mod() {
    let numOne , numTwo , mod ;
    numOne = Number(document.getElementById("firstNum").value);
    numTwo = Number(document.getElementById("secondNum").value);
    mod = numOne % numTwo ;
    document.getElementById("res").value = mod ;
}
