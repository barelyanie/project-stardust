const match1 = document.getElementById("match1");
const match2 = document.getElementById("match2");
const match3 = document.getElementById("match3");

const title = document.getElementById("title");
const champions = document.getElementById("champions");
const story = document.getElementById("story");
const quote = document.getElementById("quote");
const acceptButton = document.getElementById("acceptButton");

setTimeout(function(){

    match1.textContent = "Searching for Match...";

},1000);

setTimeout(function(){

    match2.textContent = "Finding Duo...";

},2500);

setTimeout(function(){

    match3.textContent = "Match Found ✓";

},4000);

setTimeout(function () {

   title.style.display = "block";
   title.classList.add("fade-in");
   title.textContent = "DUO QUEUE ACCEPTED";  

}, 5500);

setTimeout(function () {

    champions.style.display = "flex";
    champions.classList.add("fade-in");

}, 7000);

setTimeout(function () {

    story.style.display = "block";
    story.classList.add("fade-in");
    story.textContent = "Starting From The Ground Up";

}, 8500);

setTimeout(function () {

    quote.style.display = "block";
    quote.classList.add("fade-in");
    quote.textContent = "Every great duo starts somewhere.";

}, 10000);

setTimeout(function () {

    acceptButton.style.display = "block";
    acceptButton.classList.add("fade-in");

}, 11500);

acceptButton.addEventListener("click", function(){

    window.location.href = "jojo.html";

});