// calc() - 두 수와 연산자를 이용하여 연산 결과 출력
function calc() {
    var number1 = Number( document.getElementById("number1").value); // 첫 번째 수
    var number2 = Number( document.getElementById("number2").value); // 두 번째 수
    var operator = document.getElementById("operator").value; // 연산자

// 연산
    if (operator === '+') {
        var result = number1 + number2;
    } else if (operator === '-') {
        var result = number1 - number2;
    } else if (operator === '*') {
        var result = number1 * number2;
    } else if (operator === '/') {
        var result = number1 / number2;
    }

// 연산 결과 출력
    var div = document.getElementById('result')
    var output = String(number1) + ' ' + operator + ' ' + String(number2) + ' = ' + String(result);
    div.innerHTML = output;
}