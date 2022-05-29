//let visit = document.getElementById("visitTime");
//let timeBtn = document.getElementById("clickme");


clickMe.addEventListener("click", function timeLogger() {
    
    let whatDay = new Date();
    let currentTime = whatDay.toLocaleTimeString();
    visitTime.innerHTML = currentTime;
    
});





