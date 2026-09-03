const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");

const startButton = document.getElementById("startButton");

setTimeout(() => {

line1.textContent = "Initializing Project Stardust...";

},1000);

setTimeout(() => {

line2.textContent = "Processing...";

},2500);

setTimeout(() => {

line3.textContent = "Loading Assets...";

},4000);

setTimeout(() => {

line4.textContent = "Connecting to Queue...";

},5500);

setTimeout(() => {

line5.textContent = "Connection Established.";

startButton.style.display = "block";

},7000);

startButton.addEventListener("click", function(){

    window.location.href = "league.html";

});
