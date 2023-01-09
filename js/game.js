const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const timer = document.querySelector('.timer')
const reset = document.querySelector(".reset");


const reload = () =>{
  
}

reset.addEventListener("submit", reload)



const personagens = [
  "Amy",
  "Bernadette",
  "Howard",
  "Sheldon",
  "Rajesh",
  "Leonard",
  "Stuart",
  "Penny",
  "Leslie",
  "Barry", 
];

let primeiraCarta = "";
let segundaCarta = "";

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const checarFim = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");
  console.log(disabledCards)
  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}!! Seu tempo foi: ${timer.innerHTML}`);
  

  }
};

const checarCartas = () => {
  const primeiroPersonagem = primeiraCarta.getAttribute("data-character");
  const segundoPersonagem = segundaCarta.getAttribute("data-character");

  if (primeiroPersonagem === segundoPersonagem) {
    primeiraCarta.firstChild.classList.add("disabled-card");
    segundaCarta.firstChild.classList.add("disabled-card");
    primeiraCarta = "";
    segundaCarta = "";

    checarFim();
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("reveal-card");
      segundaCarta.classList.remove("reveal-card");

      primeiraCarta = "";
      segundaCarta = "";
    }, 500);
  }
};

const revelarCarta = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (primeiraCarta === "") {
    target.parentNode.classList.add("reveal-card");
    primeiraCarta = target.parentNode;
  } else if (segundaCarta === "") {
    target.parentNode.classList.add("reveal-card");
    segundaCarta = target.parentNode;
    checarCartas();
  }

 
};

const createCard = (personagem) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../images/${personagem}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revelarCarta);

  card.setAttribute("data-character", personagem);
  return card;
};

const loadGame = () => {
  const duplicarItems = [...personagens, ...personagens];

  const embaralharArray = duplicarItems.sort(() => Math.random() - 0.5);

  Math.random;

  embaralharArray.forEach((personagem) => {
    const card = createCard(personagem);

    grid.appendChild(card);
  });
};

const startTimer= ()=>{
this.loop = setInterval(()=> {
 const currentTime = +timer.innerHTML;
 timer.innerHTML = currentTime + 1;
},1000);
}


window.onload  = () =>{
  
 const playerName = localStorage.getItem('player')
 spanPlayer.innerHTML = playerName
 startTimer();
  loadGame();
}





