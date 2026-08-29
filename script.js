/* =========================
MEMÓRIAS
========================= */

const memories = {

lembranca: {

```
title: "Uma lembrança ₊⊹",

image: "fotos/memoria-1.jpg",

text:
  "Uma lembrança especial que quero guardar com você para sempre.",

button:
  "Guardar essa lembrança ♡"
```

},

momento: {

```
title: "Um momento ⋆.˚",

image: "fotos/memoria-2.jpg",

text:
  "Um daqueles pequenos momentos que acabaram se tornando enormes na minha memória.",

button:
  "Que memória bonita ♡"
```

}

};

/* =========================
ELEMENTOS DO MODAL
========================= */

const modal =
document.getElementById("modal");

const modalClose =
document.getElementById("modalClose");

const modalImage =
document.getElementById("modalImage");

const modalTitle =
document.getElementById("modalTitle");

const modalText =
document.getElementById("modalText");

const modalAction =
document.getElementById("modalAction");

/* =========================
ABRIR MEMÓRIA
========================= */

const memoryCards =
document.querySelectorAll(".memory-card");

memoryCards.forEach(function(card) {

card.addEventListener("click", function() {

```
const memoryName =
  card.dataset.memory;

const memory =
  memories[memoryName];


if (!memory) {
  return;
}


modalImage.src =
  memory.image;

modalImage.alt =
  memory.title;

modalTitle.textContent =
  memory.title;

modalText.textContent =
  memory.text;

modalAction.textContent =
  memory.button;


modal.classList.add("show");
```

});

});

/* =========================
FECHAR MODAL
========================= */

modalClose.addEventListener(
"click",
function() {

```
modal.classList.remove("show");
```

}
);

/* =========================
CLICAR FORA DO MODAL
========================= */

modal.addEventListener(
"click",
function(event) {

```
if (event.target === modal) {

  modal.classList.remove("show");

}
```

}
);

/* =========================
TECLA ESC
========================= */

document.addEventListener(
"keydown",
function(event) {

```
if (
  event.key === "Escape" &&
  modal.classList.contains("show")
) {

  modal.classList.remove("show");

}
```

}
);

/* =========================
BOTÃO VER MAIS
========================= */

const viewMoreButton =
document.getElementById("viewMoreButton");

const morePhotos =
document.getElementById("morePhotos");

viewMoreButton.addEventListener(
"click",
function() {

```
const isHidden =
  morePhotos.hasAttribute("hidden");


if (isHidden) {

  morePhotos.removeAttribute("hidden");

  viewMoreButton.textContent =
    "Mostrar menos ↑";

} else {

  morePhotos.setAttribute(
    "hidden",
    ""
  );

  viewMoreButton.textContent =
    "Ver mais";

}
```

}
);

/* =========================
AVATARES
========================= */

const avatarCloseButtons =
document.querySelectorAll(".avatar-close");

avatarCloseButtons.forEach(
function(button) {

```
button.addEventListener(
  "click",
  function() {

    button
      .closest(".avatar-card")
      .remove();

  }
);
```

}
);

/* =========================
DOTS DO HERO
========================= */

const dots =
document.querySelectorAll(".dot");

dots.forEach(function(dot) {

dot.addEventListener(
"click",
function() {

```
  dots.forEach(function(item) {

    item.classList.remove(
      "active-dot"
    );

  });


  dot.classList.add(
    "active-dot"
  );

}
```

);

});

/* =========================
FOTOS DA GALERIA
========================= */

const galleryImages =
document.querySelectorAll(".photo-gallery img");

galleryImages.forEach(function(image) {

image.addEventListener(
"click",
function() {

```
  modalImage.src =
    image.src;

  modalImage.alt =
    image.alt;

  modalTitle.textContent =
    "Uma lembrança especial ♡";

  modalText.textContent =
    "Mais um pedacinho das nossas memórias.";

  modalAction.textContent =
    "Que memória bonita ♡";

  modal.classList.add("show");

}
```

);

});
