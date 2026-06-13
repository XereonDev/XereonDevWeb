document.addEventListener("DOMContentLoaded", () => {

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow =
                "0 0 30px rgba(88,166,255,0.15)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "none";

        });

    });

});