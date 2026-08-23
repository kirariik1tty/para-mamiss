// =========================
// ELEMENTOS DO MODAL
// =========================

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalAction = document.getElementById("modalAction");
const modalClose = document.getElementById("modalClose");


// =========================
// CONTEÚDO DAS MEMÓRIAS
// =========================

const memories = {

  lembranca: {
    title: "Uma lembrança ₊⊹",
    text: "Aqui vamos colocar uma lembrança especial que você e sua mãe viveram juntas.",
    action: "Guardar essa lembrança ♡"
  },

  momento: {
    title: "Um momento ⋆.˚",
    text: "Aqui podemos colocar uma história pequena, engraçada ou especial que ficou guardada na memória.",
    action: "Continuar →"
  }

};


// =========================
// CONTEÚDO DAS CARTINHAS
// =========================

const messages = {

  mensagem: {
    title: "Uma mensagem para você ♡",
    text: "Feliz aniversário, mãe. Esse pequeno cantinho foi feito especialmente para você.",
    action: "♡"
  },

  admiracao: {
    title: "Coisas que admiro em você",
    text: "Aqui vamos colocar todas as pequenas e grandes coisas que fazem você ser uma pessoa tão importante para mim.",
    action: "Continuar →"
  },

  memoria: {
    title: "Uma memória especial",
    text: "Algumas lembranças merecem ser revisitadas de vez em quando.",
    action: "Lembrar ♡"
  },

  amor: {
    title: "Por que eu te amo",
    text: "Aqui vai entrar uma carta contando todas aquelas razões, grandes e pequenas, pelas quais você é tão importante para mim.",
    action: "♡"
  },

  saudade: {
    title: "Para ler quando sentir saudade",
    text: "Se algum dia sentir saudade, volte aqui. Esse cantinho sempre vai guardar um pouco de nós.",
    action: "Ficar mais um pouquinho"
  }

};


// =========================
// CONTEÚDO DOS DESTAQUES
// =========================

const features = {

  inspiracao: {
    title: "Minha inspiração ☘︎",
    text: "Uma das pessoas que mais me ensinam todos os dias.",
    action: "Continuar →"
  },

  porto: {
    title: "Meu porto seguro ʚɞ",
    text: "Onde encontro carinho, cuidado e acolhimento.",
    action: "♡"
  },

  favorita: {
    title: "Minha pessoa favorita 𐙚",
    text: "Uma pequena definição de alguém enorme na minha vida.",
    action: "Abrir surpresa →"
  }

};


// =========================
// ABRIR MODAL
// =========================

function openModal(title, text, action) {

  modalTitle.textContent = title;

  modalText.textContent = text;

  modalAction.textContent = action;

  modal.classList.add("active");

}


// =========================
// FECHAR MODAL
// =========================

function closeModal() {

  modal.classList.remove("active");

}


// =========================
// MEMÓRIAS
// =========================

document
  .querySelectorAll("[data-memory]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const type = button.dataset.memory;

      const content = memories[type];

      openModal(
        content.title,
        content.text,
        content.action
      );

    });

  });


// =========================
// CARTINHAS
// =========================

document
  .querySelectorAll("[data-message]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const type = button.dataset.message;

      const content = messages[type];

      openModal(
        content.title,
        content.text,
        content.action
      );

    });

  });


// =========================
// DESTAQUES
// =========================

document
  .querySelectorAll("[data-feature]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const type = button.dataset.feature;

      const content = features[type];

      openModal(
        content.title,
        content.text,
        content.action
      );

    });

  });


// =========================
// FECHAR NO X
// =========================

modalClose.addEventListener(
  "click",
  closeModal
);


// =========================
// CLICAR FORA DO MODAL
// =========================

modal.addEventListener("click", event => {

  if (event.target === modal) {

    closeModal();

  }

});


// =========================
// TECLA ESC
// =========================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeModal();

  }

});


// =========================
// LER MAIS
// =========================

document
  .getElementById("readMoreButton")
  .addEventListener("click", () => {

    openModal(

      "Um pouquinho sobre este cantinho ♡",

      "Esse site foi feito especialmente para guardar memórias, mensagens e pequenos pedacinhos da nossa história.",

      "Que bonito ♡"

    );

  });


// =========================
// BOTÃO PARA VOCÊ
// =========================

document
  .getElementById("forYouButton")
  .addEventListener("click", () => {

    openModal(

      "Uma surpresa para você 𐙚",

      "Ainda estamos preparando essa parte... mas prometo que vai valer a pena.",

      "Estou curiosa!"

    );

  });


// =========================
// BOTÃO ENTRAR
// =========================

document
  .getElementById("loginButton")
  .addEventListener("click", () => {

    openModal(

      "Bem-vinda ♡",

      "Este cantinho foi feito especialmente para você.",

      "Entrar →"

    );

  });


// =========================
// VER MAIS
// =========================

document
  .getElementById("viewMoreButton")
  .addEventListener("click", () => {

    openModal(

      "Mais memórias ⋆.˚",

      "Aqui vamos colocar uma galeria completa com mais fotos e histórias.",

      "Quero ver →"

    );

  });


// =========================
// SETA DAS MEMÓRIAS
// =========================

document
  .getElementById("memoriesArrow")
  .addEventListener("click", () => {

    document
      .getElementById("memorias")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


// =========================
// BOTÃO DAS MENSAGENS
// =========================

document
  .getElementById("messagesButton")
  .addEventListener("click", () => {

    document
      .getElementById("mensagens")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


// =========================
// FECHAR AVATARES
// =========================

document
  .querySelectorAll(".avatar-close")
  .forEach(button => {

    button.addEventListener("click", event => {

      event.stopPropagation();

      const card =
        button.closest(".avatar-card");

      card.style.display = "none";

    });

  });


// =========================
// DOTS DO HERO
// =========================

const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {

  dot.addEventListener("click", () => {

    dots.forEach(item => {
      item.classList.remove("active-dot");
    });

    dot.classList.add("active-dot");

  });

});
