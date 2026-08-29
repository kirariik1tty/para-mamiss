const memories = {
  lembranca: {
    title: "Uma lembrança ₊⊹",
    image: "imagens/eu%20i%20ela.jpeg",
    text: "Uma lembrança especial que quero guardar com você para sempre.",
    button: "Guardar essa lembrança ♡"
  },
  momento: {
    title: "Um momento ⋆.˚",
    image: "imagens/fofos.jpeg",
    text: "Um daqueles pequenos momentos que acabaram se tornando enormes na minha memória.",
    button: "Que memória bonita ♡"
  }
};

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalAction = document.getElementById("modalAction");

const memoryCards = document.querySelectorAll(".memory-card");

memoryCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const memoryName = card.dataset.memory;
    const memory = memories[memoryName];

    if (!memory) return;

    modalImage.src = memory.image;
    modalImage.alt = memory.title;
    modalTitle.textContent = memory.title;
    modalText.textContent = memory.text;
    modalAction.textContent = memory.button;

    modal.classList.add("show");
  });
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
  }
});

const viewMoreButton = document.getElementById("viewMoreButton");
const morePhotos = document.getElementById("morePhotos");

viewMoreButton.addEventListener("click", function () {
  const isHidden = morePhotos.hasAttribute("hidden");

  if (isHidden) {
    morePhotos.removeAttribute("hidden");
    viewMoreButton.textContent = "Mostrar menos ↑";
  } else {
    morePhotos.setAttribute("hidden", "");
    viewMoreButton.textContent = "Ver mais";
  }
});

const galleryImages = document.querySelectorAll(".photo-gallery img");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = "Uma lembrança especial ♡";
    modalText.textContent = "Mais um pedacinho das nossas memórias.";
    modalAction.textContent = "Que memória bonita ♡";

    modal.classList.add("show");
  });
});

const avatarCloseButtons = document.querySelectorAll(".avatar-close");

avatarCloseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".avatar-card").remove();
  });
});

const dots = document.querySelectorAll(".dot");

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    dots.forEach(function (item) {
      item.classList.remove("active-dot");
    });

    dot.classList.add("active-dot");
  });
});

);

});
