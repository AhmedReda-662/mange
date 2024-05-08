const btn_open = document.querySelector(".container > img");

btn_open.addEventListener("click", (e) => {
    const ul = document.querySelector("nav > ul");
    ul.classList.toggle("mobile-ul");
    if (ul.classList.contains("mobile-ul")) {
        e.target.src = "./images/icon-close.svg"
    } else {
        e.target.src = "./images/icon-hamburger.svg"
    }
});

// create SwipeLib
let cards = Array.from(document.querySelectorAll(".card"));

createPagenation(cards.length);

let span = document.querySelectorAll(".pagenation > span"),
    currentIdx = 0;

// init
document.addEventListener("DOMContentLoaded", () => {
    cards[0].classList.add("showOpacity");
    span[0].classList.add("active");
});

// create pagenaiton
function createPagenation(len) {
    for (let i = 0; i < len; i++){
        const span = `<span pos=${i}></span>`;
        cards[i].setAttribute("pos", i);
        document.querySelector(".pagenation").innerHTML += span;
    }
}

// initilaze every thing from begining
function init() {
    cards[0].classList.add("showOpacity");
    span[0].classList.add("active");
    span[cards.length - 1].classList.remove("active");
}

// show cards
function showCards(idx) {
    cards.forEach(e => {
        if (e.getAttribute("pos") == idx) {
            e.classList.add('showOpacity');
            span.forEach((bullet) => {
                if (bullet.getAttribute('pos') == idx)
                    bullet.classList.add("active");
                else
                    bullet.classList.remove("active");
            })
        } else {
            e.classList.remove("showOpacity");
        }

    })
}

// add functionality to bullets;
span.forEach(e => {
    e.addEventListener("click", () => {
        showCards(e.getAttribute("pos"));
        currentIdx = +e.getAttribute("pos");

    });
});

// make cards swap
setInterval(() => { 
    showCards(currentIdx);

    if (currentIdx >= cards.length) {
        currentIdx = 0;
        init();
    } else {
        currentIdx++;
    }
}, 3000);
