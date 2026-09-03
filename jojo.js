const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const record = document.getElementById("record");

const trait1 = document.getElementById("trait1");
const trait2 = document.getElementById("trait2");
const trait3 = document.getElementById("trait3");
const trait4 = document.getElementById("trait4");
const trait5 = document.getElementById("trait5");

const hiddenAbility = document.getElementById("hiddenAbility");
const continueArrow = document.getElementById("continueArrow");

setTimeout(() => {

    line1.textContent = " Accessing Joestar Foundation Archives...";

},1000);

setTimeout(() => {

    line2.textContent = "> Verifying Subject...";

},2500);

setTimeout(() => {

    line3.textContent = "> Identity Confirmed.";

},4000);

setTimeout(() => {

    record.style.display = "block";
    record.classList.add("fade-in");

},5500);

setTimeout(() => {

    trait1.style.display = "block";
    trait1.classList.add("fade-in");

},7000);

setTimeout(() => {

    trait2.style.display = "block";
    trait2.classList.add("fade-in");

},8000);

setTimeout(() => {

    trait3.style.display = "block";
    trait3.classList.add("fade-in");

},9000);

setTimeout(() => {

    trait4.style.display = "block";
    trait4.classList.add("fade-in");

},10000);

setTimeout(() => {

    trait5.style.display = "block";
    trait5.classList.add("fade-in");

},11000);

setTimeout(() => {

    hiddenAbility.style.display = "block";
    hiddenAbility.classList.add("fade-in");

},12500);

setTimeout(() => {

    continueArrow.style.display = "block";
    continueArrow.classList.add("fade-in");

},14000);

continueArrow.addEventListener("click", function(){

    window.location.href = "memory.html";

});