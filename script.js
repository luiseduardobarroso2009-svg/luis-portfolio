// ===============================
// CURSOR
// ===============================

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (event) => {
    if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    }

    if (follower) {
        follower.style.left = `${event.clientX}px`;
        follower.style.top = `${event.clientY}px`;
    }
});


// ===============================
// EFEITO DO CURSOR
// ===============================

const interactiveElements = document.querySelectorAll("a, button");

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        if (follower) {
            follower.style.transform =
                "translate(-50%, -50%) scale(1.8)";
        }
    });

    element.addEventListener("mouseleave", () => {
        if (follower) {
            follower.style.transform =
                "translate(-50%, -50%) scale(1)";
        }
    });

});


// ===============================
// TELA DE ENTRADA
// ===============================

const introScreen = document.getElementById("introScreen");
const enterPortfolio = document.getElementById("enterPortfolio");

if (enterPortfolio && introScreen) {

    enterPortfolio.addEventListener("click", () => {

        introScreen.classList.add("hidden");

        // Remove completamente a tela depois da animação
        setTimeout(() => {
            introScreen.style.display = "none";
        }, 800);

    });

}


// ===============================
// PROJETO
// ===============================

const projectButton = document.getElementById("openProject");

if (projectButton) {

    projectButton.addEventListener("click", () => {

        alert(
            "MINHA IA\n\n" +
            "Aplicação de Inteligência Artificial desenvolvida " +
            "com JavaScript, Node.js e integração com API."
        );

    });

} 

function entrarNoPortfolio() {
    const intro = document.getElementById("introScreen");

    if (!intro) {
        console.error("Tela de entrada não encontrada.");
        return;
    }

    intro.classList.add("hidden");

    setTimeout(() => {
        intro.style.display = "none";
    }, 800);
}
// =========================================
// PROJECT INTERACTIONS
// =========================================

const projectLinks =
    document.querySelectorAll(".project-link");

projectLinks.forEach((button) => {

    button.addEventListener("click", () => {

        const projectName =
            button.dataset.project;

        const details =
            button.dataset.details ||
            `Projeto apresentado no portfólio de Luis Eduardo.\n\n` +
            `A experiência completa será disponibilizada conforme ` +
            `o projeto for desenvolvido.`;

        alert(`${projectName}\n\n${details}`);

    });

});