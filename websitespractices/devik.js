/* =========================================
   SMOOTH START
========================================= */

const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

    document.querySelector(".story-section").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   LETTER TYPING EFFECT
========================================= */

const letterText = `
I don't know if these words can change anything.

Maybe they can't.

But I still wanted to say them.

I miss the person I was when we could laugh about
the smallest things.

I miss the conversations.

I miss the comfort.

But more than missing the relationship,
I've spent time understanding the mistakes
that helped break it.

I know saying sorry doesn't erase the past.

So I'm not asking you to erase it.

I'm only asking you to see that I finally
understand what I couldn't understand before.

If we ever get another chance,
I don't want to be the same person.

I want to listen better.

Communicate better.

Love better.

And appreciate you better.

Maybe we can't return to where we were.

Maybe that's okay.

Because if we ever write another chapter,
I want it to be something better than the first.

And if all you give me is one conversation,
I'll be grateful for that too.

Take your time.

Whatever you choose,
I will respect it.

I'm sorry.

And thank you...

for once being such an important part
of my life.
`;

const letterElement = document.getElementById("typingLetter");

let letterStarted = false;

function typeLetter() {

    let i = 0;

    function type() {

        if (i < letterText.length) {

            const character = letterText.charAt(i);

            if (character === "\n") {

                letterElement.innerHTML += "<br>";

            } else {

                letterElement.innerHTML += character;

            }

            i++;

            setTimeout(type, 18);
        }
    }

    type();
}


/* Start letter when visible */

const letterObserver = new IntersectionObserver(
    (entries) => {

        if (entries[0].isIntersecting && !letterStarted) {

            letterStarted = true;

            typeLetter();

        }

    },
    {
        threshold: 0.25
    }
);

letterObserver.observe(
    document.querySelector(".letter-section")
);


/* =========================================
   YES / TALK BUTTON
========================================= */

const talkBtn = document.getElementById("talkBtn");

talkBtn.addEventListener("click", () => {

    const finalMessage =
        document.getElementById("finalMessage");

    finalMessage.innerHTML = `
        Thank you for giving this a chance. ❤️
        <br><br>
        I don't need everything to be perfect.
        <br>
        I just want us to talk honestly.
    `;

    createHeartBurst();

});


/* =========================================
   NEED TIME BUTTON
========================================= */

const timeBtn = document.getElementById("timeBtn");

timeBtn.addEventListener("click", () => {

    const finalMessage =
        document.getElementById("finalMessage");

    finalMessage.innerHTML = `
        I understand. 🌙
        <br><br>
        Take all the time you need.
        <br>
        Your feelings deserve to be respected.
    `;

});


/* =========================================
   FLOATING HEARTS
========================================= */

const heartContainer =
    document.getElementById("heartContainer");

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        Math.random() > .5 ? "♥" : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        10 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}


/* Gentle background hearts */

setInterval(createHeart, 1300);


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}


/* =========================================
   MUSIC BUTTON
========================================= */

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    musicPlaying = !musicPlaying;

    if (musicPlaying) {

        musicBtn.innerHTML = "❚❚";

        /*
            If you want background music,
            create music.mp3 and uncomment:

            const music = new Audio("music.mp3");
            music.loop = true;
            music.play();
        */

    // } else {

    //     musicBtn.innerHTML = "♫";

    }

});