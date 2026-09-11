document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PASSWORD SYSTEM
    ========================= */

    window.checkPassword = function(){

        const password =
            document.getElementById("passwordInput").value.trim();

        if(password.toLowerCase() === "nezha"){

            const passwordScreen =
                document.getElementById("passwordScreen");

            const websiteContent =
                document.getElementById("websiteContent");

            passwordScreen.style.opacity = "0";

            passwordScreen.style.transition =
                "opacity 0.8s ease";

            setTimeout(() => {

                passwordScreen.style.display = "none";

                websiteContent.style.display = "block";

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 800);

        }else{

            alert("Wrong PIN 💙");

            const input =
                document.getElementById("passwordInput");

            input.value = "";

            input.focus();

        }

    };


    /* =========================
       ENTER KEY PASSWORD
    ========================= */

    const passwordInput =
        document.getElementById("passwordInput");

    if(passwordInput){

        passwordInput.addEventListener("keydown", (event) => {

            if(event.key === "Enter"){

                checkPassword();

            }

        });

    }


    /* =========================
       OPEN MENSIVE
    ========================= */

    window.openGift = function(){

        const music =
            document.getElementById("music");

        const giftSection =
            document.getElementById("giftSection");

        if(music){

            music.volume = 0.6;

            music.play().catch(() => {

                console.log(
                    "Music requires user interaction."
                );

            });

        }

        if(giftSection){

            giftSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    };


    /* =========================
       FLOATING BLUE HEARTS
    ========================= */

    function createHeart(){

        const hearts =
            document.getElementById("hearts");

        if(!hearts) return;

        const heart =
            document.createElement("div");

        const symbols = [
            "💙",
            "🤍",
            "✨",
            "♡"
        ];

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        heart.style.position = "absolute";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-30px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.opacity =
            Math.random() * 0.6 + 0.3;

        const duration =
            Math.random() * 4 + 6;

        heart.style.animation =
            `fall ${duration}s linear`;

        hearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, duration * 1000 + 500);

    }

    setInterval(createHeart, 450);


    /* =========================
       HEART ANIMATION
    ========================= */

    const style =
        document.createElement("style");

    style.innerHTML = `

        @keyframes fall{

            0%{

                transform:
                    translateY(0)
                    rotate(0deg);

                opacity:0;

            }

            10%{

                opacity:1;

            }

            100%{

                transform:
                    translateY(110vh)
                    rotate(360deg);

                opacity:0;

            }

        }


        .fade-in{

            opacity:0;

            transform:
                translateY(40px);

            transition:
                opacity 1s ease,
                transform 1s ease;

        }


        .fade-in.show{

            opacity:1;

            transform:
                translateY(0);

        }

    `;

    document.head.appendChild(style);


    /* =========================
       SCROLL ANIMATION
    ========================= */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target
                            .classList
                            .add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    document.querySelectorAll(
        ".section, .polaroid, .reason-card, .final-section, .ending"
    ).forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });


    /* =========================
       POLAROID EFFECT
    ========================= */

    const polaroids =
        document.querySelectorAll(".polaroid");

    polaroids.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "scale(1.08) rotate(0deg)";

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                const index =
                    Array.from(polaroids)
                    .indexOf(card);

                const rotations = [
                    "-2deg",
                    "2deg",
                    "-1deg",
                    "3deg",
                    "-3deg",
                    "1deg",
                    "-2deg",
                    "2deg"
                ];

                card.style.transform =
                    `rotate(${rotations[index] || "0deg"})`;

            }
        );

    });


    /* =========================
       PARALLAX HERO
    ========================= */

    window.addEventListener("scroll", () => {

        const hero =
            document.querySelector(".hero");

        if(!hero) return;

        const scroll =
            window.pageYOffset;

        hero.style.transform =
            `translateY(${scroll * 0.03}px)`;

    });


    /* =========================
       MENSIVE QUOTES
    ========================= */

    const quotes = [

        "Finally, it's our first mensive. 💙",

        "One month with you, and I'm still so happy. 🤍",

        "You are my home, my world, my universe. 💙",

        "Kamu keren, aku keren, kita berdua keren huhuhu. 🫰🏻",

        "Thank you for staying and being patient with me. 🤍",

        "I'm so grateful that I got to know you. ✨",

        "One month down, and many more chapters to come. 💙",

        "I feel safe being myself with you. ❤️‍🩹",

        "I love you more than yesterday. 🤍",

        "Tomorrow, I'll love you even more. 💙"

    ];


    const quoteElement =
        document.createElement("div");

    quoteElement.className =
        "floating-quote";

    quoteElement.innerText =
        quotes[0];

    document.body.appendChild(
        quoteElement
    );


    let currentQuote = 0;


    setInterval(() => {

        quoteElement.style.opacity = "0";

        setTimeout(() => {

            currentQuote++;

            if(currentQuote >= quotes.length){

                currentQuote = 0;

            }

            quoteElement.innerText =
                quotes[currentQuote];

            quoteElement.style.opacity = "1";

        }, 500);

    }, 5000);


    /* =========================
       QUOTE STYLE
    ========================= */

    const quoteStyle =
        document.createElement("style");

    quoteStyle.innerHTML = `

        .floating-quote{

            position:fixed;

            bottom:20px;

            left:50%;

            transform:
                translateX(-50%);

            background:
                rgba(15,80,125,.35);

            backdrop-filter:
                blur(12px);

            border:
                1px solid
                rgba(100,210,255,.2);

            padding:
                12px 20px;

            border-radius:50px;

            font-size:14px;

            color:#e5f8ff;

            text-align:center;

            z-index:999;

            transition:
                opacity .5s ease;

            box-shadow:
                0 0 20px
                rgba(50,180,255,.12);

            max-width:
                calc(100% - 40px);

            white-space:
                nowrap;

        }


        @media(max-width:600px){

            .floating-quote{

                font-size:12px;

                padding:
                    10px 16px;

                bottom:15px;

            }

        }

    `;

    document.head.appendChild(
        quoteStyle
    );


    /* =========================
       MUSIC VOLUME
    ========================= */

    const music =
        document.getElementById("music");

    if(music){

        music.volume = 0.6;

    }

});
