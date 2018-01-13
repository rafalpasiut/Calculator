let memory = {
    lastResult: 0,
};

function httpGet(theUrl, callback)
{
    const xhr = new XMLHttpRequest();
    xhr.responseType = "JSON";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    };
    xhr.open("GET", theUrl, true); // true for asynchronous
    xhr.send();
}

function calculate() {
    const equation = document.getElementById("display").textContent;
    const answer = httpGet("http://localhost:8080/v1/calculator/calculate?equation=" + parseEquation(equation), calculationsCallback);
    document.getElementById('display').value = answer;
}

function parseEquation(equation){
    return encodeURIComponent(equation);
}

function calculationsCallback(data) {
    document.getElementById("display").textContent = data;
}

function addToDisplay(sign){
    document.getElementById('display').textContent += sign;
}

function clearDisplay(){
    document.getElementById('display').textContent="";
}