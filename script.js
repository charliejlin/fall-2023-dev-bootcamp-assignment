const card = document.querySelector("main");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back")
let flipped = false;

card.addEventListener('click', () => {

    if (flipped === false) {
        card.style.transform = "rotateY(180deg)";
        if (cardFront.classList.contains("flipped-text-delay-visible")) {
            cardFront.classList.remove("flipped-text-delay-visible");
        }
        if (cardBack.classList.contains("flipped-text-delay-hidden")) {
            cardBack.classList.remove("flipped-text-delay-hidden");
        }
        cardFront.classList.add("flipped-text-delay-hidden");
        cardBack.classList.add("flipped-text-delay-visible");
        flipped = true;
    } else {
        card.style.transform = "rotateY(360deg)";
        if (cardFront.classList.contains("flipped-text-delay-hidden")) {
            cardFront.classList.remove("flipped-text-delay-hidden");
        }
        if (cardBack.classList.contains("flipped-text-delay-visible")) {
            cardBack.classList.remove("flipped-text-delay-visible");
        }
        cardBack.classList.add("flipped-text-delay-hidden");
        cardFront.classList.add("flipped-text-delay-visible");
        flipped = false;
    }
})
