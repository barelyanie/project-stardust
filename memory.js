const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

function openPopup(title, message){

    popup.style.display = "flex";
    popupTitle.textContent = title;
    popupText.textContent = message;

}

closePopup.onclick = function(){

    popup.style.display = "none";

}

// ⭐ Star
const star = document.getElementById("star");

star.onclick = function(){

    openPopup(
        "⭐",
        "You made it onto my favorite constellation."
    );

    createSparkles();

};

function createSparkles(){

    const starRect = star.getBoundingClientRect();

    for(let i = 0; i < 20; i++){

        const sparkle = document.createElement("div");

        sparkle.textContent = "✦";

        sparkle.className = "sparkle";

        sparkle.style.left =
            (starRect.left + Math.random() * starRect.width) + "px";

        sparkle.style.top =
            (starRect.top + Math.random() * starRect.height) + "px";

        document.body.appendChild(sparkle);

        setTimeout(function(){

            sparkle.remove();

        }, 1500);

    }

}


// 💚 Green Heart
const greenHeart = document.getElementById("greenHeart");

greenHeart.onclick = function(){

    openPopup(
        "💚",
        "A green heart because why not."
    );

    createHeartSparkles();

};

function createHeartSparkles(){

    const heartRect = greenHeart.getBoundingClientRect();

    for(let i = 0; i < 15; i++){

        const heart = document.createElement("div");

        heart.textContent = "💚";

        heart.className = "heartSparkle";

        heart.style.left =
            (heartRect.left + Math.random() * heartRect.width) + "px";

        heart.style.top =
            (heartRect.top + Math.random() * heartRect.height) + "px";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },1500);

    }

}

// 🥒 Cucumber
const cucumber = document.getElementById("cucumber");

cucumber.onclick = function(){

    openPopup(
        "🥒 A VERY IMPORTANT DISCOVERY",
        "Some people buy roses, I found a heart-shaped cucumber and that might just be better."
    );

    createCucumberRain();

};

function createCucumberRain(){

    for(let i = 0; i < 12; i++){

        const cucumberPiece = document.createElement("div");

        cucumberPiece.textContent = "🥒";

        cucumberPiece.className = "cucumberRain";

        cucumberPiece.style.left =
            Math.random() * 100 + "vw";

        cucumberPiece.style.animationDelay =
            Math.random() * 0.5 + "s";

        document.body.appendChild(cucumberPiece);

        setTimeout(function(){

            cucumberPiece.remove();

        },1800);

    }

}

// 🕷️ Spider-Man
const spiderman = document.getElementById("spiderman");

spiderman.onclick = function(){

    openPopup(
        "🕷️",
        "WITH GREAT POWER..."
    );

    createWebEffect();

    setTimeout(function(){

        popupTitle.textContent = "🕷️ WITH GREAT POWER...";

        popupText.textContent =
            "comes great birthday cake. 🎂\n\nHappy Birthday, birthday boy ❤️";

    },1200);

};
function createWebEffect(){

    const web = document.createElement("div");

    web.textContent = "🕸️";

    web.className = "webEffect";

    document.body.appendChild(web);

    setTimeout(function(){

        web.remove();

    },1200);

}

// 🦇 Batman
const batman = document.getElementById("batman");

batman.onclick = function(){

    openPopup(
        "🦇 SYSTEM DIAGNOSTIC",
        "Running birthday.exe..."
    );

    runBirthdayScan();

};

function runBirthdayScan(){

    const messages = [
        "INITIALIZING...",
        "SCANNING SYSTEM...",
        "CHECKING FOR BUGS...",
        "ANALYZING BIRTHDAY BOY...",
        "SYSTEM CHECK COMPLETE ✓"
    ];

    let index = 0;

    const scan = setInterval(function(){

        popupText.textContent = messages[index];

        index++;

        if(index === messages.length){

            clearInterval(scan);

            setTimeout(function(){

                popupTitle.textContent = "🦇 SYSTEM DIAGNOSTIC";
                
                popupText.textContent =
                    "AGE: +1\n" +
                    "BUGS: 0\n" +
                    "At least I hope it has no bugs...";

            },800);

        }

    },700);

}


// ❤️ Love Poké Ball
const loveBall = document.getElementById("loveBall");

loveBall.onclick = function(){

    openPopup(
        "❤️",
        "A wild birthday boy appeared!"
    );

    setTimeout(function(){

        popupTitle.textContent = "❤️ POKÉMON ENCOUNTER";
        popupText.textContent = "You found him. Don't let him escape.";

    },1200);

};

// ⚪ Poké Ball
const pokeBall = document.getElementById("pokeBall");

pokeBall.onclick = function(){

    openPopup(
        "⚪ WILD ENCOUNTER!",
        "A wild birthday boy appeared!"
    );

    setTimeout(function(){

        popupTitle.textContent = "⚪ WHAT WILL YOU DO?";

        popupText.innerHTML = `
            <button id="celebrateButton">CELEBRATE 🎉</button>
        `;

     document.getElementById("celebrateButton").onclick = function(){

     popupTitle.textContent = "🎉 CRITICAL HIT!";

     popupText.textContent =
        "Birthday successfully celebrated. ✨";

    createConfetti();

};
    },1000);

};
function createConfetti(){

    for(let i = 0; i < 60; i++){

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = "50%";
        confetti.style.top = "50%";

        confetti.style.backgroundColor =
            ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#9b5de5"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.setProperty(
            "--x",
            (Math.random() * 600 - 300) + "px"
        );

        confetti.style.setProperty(
            "--y",
            (Math.random() * 600 - 300) + "px"
        );

        document.body.appendChild(confetti);

        setTimeout(function(){

            confetti.remove();

        },1500);

    }

}

// 🐸 Greninja
document.getElementById("greninja").onclick = function(){

    openPopup(
        "🐸",
        "One of your favorites just had to make an appearance."
    );

}

// ⚡ Ampharos
document.getElementById("ampharos").onclick = function(){

    openPopup(
        "⚡",
        "Lighting up another year."
    );

}

// 🪶 Xayah
document.getElementById("xayah").onclick = function(){

    openPopup(
        "🪶",
        "Every duo starts somewhere."
    );

}

// 🪶 Rakan
document.getElementById("rakan").onclick = function(){

    openPopup(
        "🪶",
        "I'm working on it."
    );

}

// 🌌 Gurren Lagann
const gurren = document.getElementById("gurren");

gurren.onclick = function(){

    createGurrenEffect();

};
function createGurrenEffect(){

    const overlay = document.createElement("div");

    overlay.className = "gurrenOverlay";

    overlay.innerHTML = `
        <div class="gurrenQuote">
            <div class="gurrenTitle">✦ GURREN LAGANN ✦</div>

            <div class="gurrenText">
                "Believe in the me<br>
                that believes in you."
            </div>

            <div class="gurrenBirthday">
                Happy Birthday ❤️
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    setTimeout(function(){

        overlay.remove();

    },4000);

}

const mel = document.getElementById("mel");

mel.onclick = function(){

    for(let i = 0; i < 15; i++){

        const mage = document.createElement("div");

        mage.textContent = "MAGE";

        mage.classList.add("mageText");

        mage.style.left = Math.random() * 90 + "%";
        mage.style.top = Math.random() * 90 + "%";

        document.body.appendChild(mage);

        setTimeout(function(){

            mage.remove();

        }, 1800);

    }

};

//  One More Thing...💌
const finalButton = document.getElementById("finalButton");

finalButton.onclick = function(){
    window.location.href = "birthday.html";
};