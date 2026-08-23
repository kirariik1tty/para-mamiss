/* ==================================================
   SITE PARA MAMÃE ♡
   JAVASCRIPT
================================================== */


/* ==================================================
   BANCO DE MEMÓRIAS
================================================== */

const memories = {

  lembranca: {
    title: "Uma lembrança ₊⊹",

    text: "Aqui vamos colocar uma lembrança especial de vocês duas. Pode ser uma viagem, um aniversário, uma conversa ou simplesmente um daqueles momentos pequenos que ficaram guardados no coração.",

    button: "Guardar essa lembrança ♡"
  },


  momento: {
    title: "Um momento ⋆.˚",

    text: "Aqui vai entrar outra memória especial. A ideia é contar não apenas o que aconteceu, mas por que aquele momento foi importante para você.",

    button: "Que memória bonita ♡"
  }

};


/* ==================================================
   MODAL
================================================== */

const modal = document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalText =
  document.getElementById("modalText");

const modalAction =
  document.getElementById("modalAction");

const modalClose =
  document.getElementById("modalClose");


/* ==================================================
   ABRIR UMA MEMÓRIA
================================================== */

const memoryCards =
  document.querySelectorAll(".memory-card");


memoryCards.forEach(card => {

  card.addEventListener("click", () => {

    // Descobre qual memória foi clicada
    const memoryName =
      card.dataset.memory;


    // Procura essa memória no nosso "banco"
    const memory =
      memories[memoryName];


    // Se não encontrar, não faz nada
    if (!memory) {
      return;
    }


    // Coloca o título no modal
    modalTitle.textContent =
      memory.title;


    // Coloca o texto no modal
    modalText.textContent =
      memory.text;


    // Coloca o texto do botão
    modalAction.textContent =
      memory.button;


    // Mostra o modal
    modal.classList.add("active");

  });

});


/* ==================================================
   FECHAR O MODAL PELO X
================================================== */

modalClose.addEventListener("click", () => {

  modal.classList.remove("active");

});


/* ==================================================
   FECHAR CLICANDO FORA
================================================== */

modal.addEventListener("click", event => {

  if (event.target === modal) {

    modal.classList.remove("active");

  }

});


/* ==================================================
   FECHAR COM ESC
================================================== */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    modal.classList.remove("active");

  }

});


/* ==================================================
   BOTÃO "VER MAIS"
================================================== */

const viewMoreButton =
  document.getElementById("viewMoreButton");


viewMoreButton.addEventListener("click", () => {

  // Por enquanto, abre uma mensagem.
  // Depois vamos transformar isso em uma
  // página/galeria de memórias.

  modalTitle.textContent =
    "Mais memórias ♡";

  modalText.textContent =
    "Em breve teremos aqui um álbum completo com todas as nossas lembranças especiais.";

  modalAction.textContent =
    "Mal posso esperar ♡";

  modal.classList.add("active");

});


/* ==================================================
   SETA DA SEÇÃO "MEMÓRIAS"
================================================== */

const memoriesArrow =
  document.getElementById("memoriesArrow");


memoriesArrow.addEventListener("click", () => {

  document
    .getElementById("memorias")
    .scrollIntoView({
      behavior: "smooth"
    });

});
