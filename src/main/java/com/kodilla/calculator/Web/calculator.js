let memory = {
    lastResult: 0,
    memory: 0,
    lastInput: 0
};

function httpGet(theUrl, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "JSON";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    };
    xhr.open("GET", theUrl, true); // true for asynchronous
    xhr.send();
}

function calculate() {
    const equation = document.getElementById("displayEquation").textContent + memory.lastInput;
    httpGet("http://localhost:8080/v1/calculator/calculate?equation=" + parseEquation(equation), calculationsCallback);
}

function parseEquation(equation) {
    return encodeURIComponent(equation);
}

function calculationsCallback(data) {
    document.getElementById("display").textContent = data;
    document.getElementById("displayEquation").textContent = "";
    memory.lastResult = data;
    if (data === "NaN") {
        memory.lastInput = 0;
    } else {
        memory.lastInput = Number(data);
    }
}

function addToEquationDisplay(sign) {
    sign = sign.trim();
    if (isNumeric(sign) || sign === ".") {
        if (memory.lastInput == 0) {
            memory.lastInput = sign;
        } else {
            memory.lastInput = memory.lastInput.toString() + sign;
        }
        document.getElementById('display').textContent = memory.lastInput.toString();
    } else {
        document.getElementById('displayEquation').textContent += (memory.lastInput + sign);
        memory.lastInput = 0;
    }
}

function clearDisplay() {
    document.getElementById('display').textContent = "";
    document.getElementById('displayEquation').textContent = "";
    memory.lastInput = 0;
}

function addToMemory() {
    memory.memory = document.getElementById('display').textContent.trim();
}

function addAnsToQeuation() {
    document.getElementById('displayEquation').textContent += memory.lastResult;
}

function addMemoryToQeuation() {
    document.getElementById('displayEquation').textContent += memory.memory;
}

function negate() {
    memory.lastInput = memory.lastInput * -1;
    memory.lastResult = memory.lastInput;
    document.getElementById('display').textContent = memory.lastInput.toString();
}

function calculateOneOperation(operationCallback) {
    memory.lastInput = operationCallback(memory.lastInput);
    memory.lastResult = memory.lastInput;
    document.getElementById('display').textContent = memory.lastResult.toString();
}

function calculateSqrt(data) {
    return Math.sqrt(data);
}

function calculateDivide1(data) {
    return 1 / data;
}

function calculateSquarePower(data) {
    return Math.pow(data, 2);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}