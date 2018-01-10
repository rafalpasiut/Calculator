function httpGet(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xmlHttp.send(null);
}

function calculate() {
    answer = httpGet("http://localhost:8080/v1/calculator/calculate?equation=1+2", calculationsCallback);
}

function calculationsCallback(data) {
    document.getElementById("display").textContent = data;
}