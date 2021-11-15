function fiboS() {
    let fibo = [0, 1]; 
    var number = document.getElementById("number").value;
    for (var i=fibo.length; i<number; i++) {
        fibo[i] = fibo[i-2] + fibo[i-1];
    }
    if (number % i === 1) {
        return 0;
    }
    if (number <= 0) {
        return "COLOCA UN NÚMERO MAYOR A CERO";
    }
    return fibo[i-1];
}
function displayResult() {
    var result = fiboS();
    document.getElementById("textResult").innerHTML = "El número de la serie de Fibonacci que buscas es:";
    document.getElementById("result").innerHTML = result;
}
var el = document.querySelector("button");
el.onclick = displayResult;