const memories = {
  lembranca: {
    title: "Uma lembrança ₊⊹",
    image: "imagens/eu i ela.jpeg",
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

const cardMessages = {
  mensagem: {
    title: "Uma mensagem para você",
    text: "Só queria que você soubesse o quanto você é importante pra mim, hoje e sempre. Espero que esse cantinho te faça sorrir.",
    button: "Te amo ♡"
  },
  admiracao: {
    title: "Coisas que admiro em você",
    text: "Sua força, seu jeito de cuidar de todo mundo antes de si mesma, sua paciência e o seu sorriso que ilumina qualquer dia ruim.",
    button: "Você é incrível ♡"
  },
  memoria: {
    title: "Uma memória especial",
    text: "Quando estávamos apenas nós duas num apartamento pequeno, era apenas eu e você... nossos eternos momentos efêmeros que guardo até hoje.",
    button: "Guardar ♡"
  },
  amor: {
    title: "Por que eu te amo",
    text: "Por tudo que você é, por tudo que você faz, e por simplesmente ser você. Não precisa de motivo, mas se precisasse, seriam mil.",
    button: "Sempre ♡"
  },
  saudade: {
    title: "Para ler quando sentir saudade",
    text: "Onde quer que eu esteja, uma parte de mim está sempre com você. A saudade só mostra o quanto esse amor é grande.",
    button: "Estou aqui ♡"
  }
};

const specialMessages = {
  porto: {
    title: "Meu porto seguro",
    text: "Não importa o que aconteça lá fora, saber que posso voltar pra você me faz sentir segura. Obrigada por ser meu lugar de paz.",
    button: "Meu porto seguro ♡"
  }
};

const loveReasons = [
  "Porque você nem sempre sabe o que dizer, mas sabe estar presente.",
  "Porque seu colo afugenta meus medos.",
  "Porque você nunca desistiu de mim.",
  "Porque seu cheiro de mãe é meu aroma favorito.",
  "Porque você é a definição de amor incondicional."
];

const funFacts = [
  "Adoro que nós temos um sinal igual no olho esquerdo.",
  "Sua comida é sempre a mais gostosa, só perde para a da vovó.",
  "Eu guardo mais fotos suas do que você imagina, bem mais.",
  "Seu conselho quase sempre está certo (quase).",
  "Você é minha pessoa favorita desde sempre."
];

const quizQuestions = [
  {
    question: "Qual é a nossa comida favorita pra fazer juntas?",
    options: ["Torta", "Pizza", "Gelatina", "Chocolate quente"],
    correct: 3,
    feedback: "Isso mesmo! Nosso clássico de sempre e meu favorito. ♡"
  },
  {
    question: "Qual foi o nosso último passeio juntas?",
    options: ["Praia", "Shopping", "Casa da vovó", "Cinema"],
    correct: 2,
    feedback: "Aquele dia foi tão bom! devíamos ter comprado mais roupas rsrs ♡"
  },
  {
    question: "O que mais me lembra você?",
    options: ["Seu perfume", "Sua risada", "Seu abraço", "Todas as opções"],
    correct: 3,
    feedback: "Tudo em você me lembra o quanto te amo. ♡"
  }
];

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalAction = document.getElementById("modalAction");

function openModal(data) {
  if (data.image) {
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalImage.removeAttribute("hidden");
  } else {
    modalImage.src = "";
    modalImage.setAttribute("hidden", "");
  }

  modalTitle.textContent = data.title;
  modalText.textContent = data.text;
  modalAction.textContent = data.button;

  modal.classList.add("show");
}

modalClose.addEventListener("click", function () {
  modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

const memoryCards = document.querySelectorAll(".memory-card");

memoryCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const memory = memories[card.dataset.memory];
    if (memory) openModal(memory);
  });
});

const galleryImages = document.querySelectorAll(".photo-gallery img");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    openModal({
      image: image.getAttribute("src"),
      title: "Uma lembrança especial ♡",
      text: "Mais um pedacinho das nossas memórias.",
      button: "Que memória bonita ♡"
    });
  });
});

const messageButtons = document.querySelectorAll(".message");

messageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    messageButtons.forEach(function (b) { b.classList.remove("selected"); });
    button.classList.add("selected");

    const data = cardMessages[button.dataset.message];
    if (data) openModal(data);
  });
});

const rankingCards = document.querySelectorAll(".ranking-card");

rankingCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const feature = card.dataset.feature;

    if (feature === "inspiracao") {
      openQuiz();
    } else if (feature === "porto") {
      openModal(specialMessages.porto);
    } else if (feature === "favorita") {
      openMusicModal();
    }
  });
});

const avatarIcons = document.querySelectorAll(".avatar");

avatarIcons.forEach(function (avatar) {
  avatar.addEventListener("click", function () {
    const type = avatar.dataset.avatar;
    const list = type === "love" ? loveReasons : funFacts;
    const random = list[Math.floor(Math.random() * list.length)];

    openModal({
      title: type === "love" ? "Um motivo pra te amar ♡" : "Uma curiosidade ✦",
      text: random,
      button: "Mais um ♡"
    });
  });
});

const avatarCloseButtons = document.querySelectorAll(".avatar-close");

avatarCloseButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    button.closest(".avatar-card").remove();
  });
});

const quizModal = document.getElementById("quizModal");
const quizModalClose = document.getElementById("quizModalClose");
const quizBody = document.getElementById("quizBody");
let currentQuestion = 0;

function openQuiz() {
  currentQuestion = 0;
  renderQuiz();
  quizModal.classList.add("show");
}

function renderQuiz() {
  if (currentQuestion < quizQuestions.length) {
    const q = quizQuestions[currentQuestion];

    quizBody.innerHTML =
      '<p class="quiz-progress">Pergunta ' + (currentQuestion + 1) + ' de ' + quizQuestions.length + '</p>' +
      '<h2>' + q.question + '</h2>' +
      '<div class="quiz-options"></div>';

    const optionsContainer = quizBody.querySelector(".quiz-options");

    q.options.forEach(function (option, index) {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = option;
      btn.addEventListener("click", function () { selectAnswer(index); });
      optionsContainer.appendChild(btn);
    });

  } else {
    quizBody.innerHTML =
      '<h2>Fim do quiz! ♡</h2>' +
      '<p>Não importa o quanto você acertou — o que importa é o tanto que a gente já viveu junto.</p>' +
      '<button class="modal-action" id="quizRestart">Jogar de novo</button>';

    document.getElementById("quizRestart").addEventListener("click", openQuiz);
  }
}

function selectAnswer(index) {
  const q = quizQuestions[currentQuestion];
  const options = quizBody.querySelectorAll(".quiz-option");

  options.forEach(function (opt, i) {
    opt.disabled = true;
    if (i === q.correct) opt.classList.add("correct");
    if (i === index && index !== q.correct) opt.classList.add("wrong");
  });

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";
  feedback.textContent = q.feedback;
  quizBody.appendChild(feedback);

  const nextBtn = document.createElement("button");
  nextBtn.className = "modal-action";
  nextBtn.textContent = (currentQuestion + 1 < quizQuestions.length) ? "Próxima →" : "Ver resultado →";
  nextBtn.addEventListener("click", function () {
    currentQuestion++;
    renderQuiz();
  });
  quizBody.appendChild(nextBtn);
}

quizModalClose.addEventListener("click", function () {
  quizModal.classList.remove("show");
});

quizModal.addEventListener("click", function (event) {
  if (event.target === quizModal) {
    quizModal.classList.remove("show");
  }
});

const musicModal = document.getElementById("musicModal");
const musicModalClose = document.getElementById("musicModalClose");

function openMusicModal() {
  musicModal.classList.add("show");
}

musicModalClose.addEventListener("click", function () {
  musicModal.classList.remove("show");
});

musicModal.addEventListener("click", function (event) {
  if (event.target === musicModal) {
    musicModal.classList.remove("show");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.remove("show");
    quizModal.classList.remove("show");
    musicModal.classList.remove("show");
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

const dots = document.querySelectorAll(".dot");

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    dots.forEach(function (item) { item.classList.remove("active-dot"); });
    dot.classList.add("active-dot");
  });
});
