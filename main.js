document.addEventListener('DOMContentLoaded', () => {
  createGame();
});

const game = [
  {
    id: 0,
    name: 'baccarat',
    label: '',
    description: 'Welcome Bonus',
    price: 250,
    bonus: ['+ 20 Free Spins'],
    userNum: 1816,
    rating: 9.3,
    stars: 3.5
  },
  {
    id: 1,
    name: 'black-jack',
    label: 'trending',
    description: '200% Up to',
    price: 500,
    bonus: ['+ 20 FREE SPINS'],
    userNum: 2063,
    rating: 9.9,
    stars: 4.5
  },
  {
    id: 2,
    name: 'pai-gow',
    label: 'exclusive',
    description: '100% Up to',
    price: 200,
    bonus: ['+ 25 Free Spins on Book of Dead'],
    userNum: 1890,
    rating: 9.4,
    stars: 4.5
  },
  {
    id: 3,
    name: 'poker',
    label: 'player favourite',
    description: '100% Up to',
    price: 1500,
    bonus: ['+ 150 Zee Spins', '+ 500 Zee Points'],
    userNum: 2589,
    rating: 10,
    stars: 4.5
  },
  {
    id: 4,
    name: 'roulette',
    label: 'number 1 in europe',
    description: '200% Up to',
    price: 3000,
    bonus: ['+ 30 FREE SPINS'],
    userNum: 1975,
    rating: 9.8,
    stars: 4.5
  }
]

const gameContainer = document.querySelector('.game-container');

function createGame() {
  game.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
  game.forEach((el) => {
    addGame(el);
    addGameLabel(el);
    addImage(el);
    addDescription(el);
    addStars(el, el.stars);
    addGameRating(el);
    addBtn(el);
    addResponsible();
  });
}

function addGame({ id }) {
  gameElement = document.createElement('div');
  gameElement.className = 'game';
  gameElement.id = id;
  gameContainer.appendChild(gameElement);
};

function addGameLabel({ label }) {
  gameLabel = document.createElement('span');
  gameLabel.className = 'game-label';
  gameLabel.innerHTML = `${label}`; 
  gameElement.appendChild(gameLabel);
  if(label === '') {
    gameElement.removeChild(gameElement.firstChild);
  }
};

function addImage({ name, label }) {
  imageElement = document.createElement('div');
  imageElement.className = 'image-container';
  imageElement.innerHTML = `<div class="image" style="background-image: url(&quot;assets/${name}.jpg&quot;);"></div>`;
  gameElement.appendChild(imageElement);
};

function addDescription({ name, description, price, bonus}) {
  bonus = bonus.join(' ')
  infoElement = document.createElement('div');
  infoElement.className = 'description-container';
  infoElement.innerHTML = `<span class="name">${name}</span><span class="description">${description}</span><span class="price">&euro;${price}</span><span class="bonus">${bonus}</span>`;
  gameElement.appendChild(infoElement);
};

function addStars({ userNum }, countStars) {
  raitingElement = document.createElement('div');
  raitingElement.className = 'rating-stars';
  raitingElement.innerHTML = `<span>Rating(${userNum})</span>`;
  container = document.createElement('div');
  container.className = 'stars';
  star = '<img src="assets/star.png" alt="star">';
  halfStar = '<img src="assets/half-star.png" alt="half-star">';
  noStar = '<img src="assets/no-star.png" alt="no-star">';
  starNum = countStars;

  for (let i = 1; i <= starNum; i++){
    container.insertAdjacentHTML('beforeend', star);
    container.lastElementChild.classList.add('star');
    raitingElement.appendChild(container);
  }

  if(starNum % 1 !== 0) {
    container.insertAdjacentHTML('beforeend', halfStar);
    container.lastElementChild.classList.add('star');
  }
  if(starNum < 5) {
    for (let i = 1; i <= 5 - starNum; i++){
      container.insertAdjacentHTML('beforeend', noStar);
      container.lastElementChild.classList.add('star');
    }
  }
  return raitingElement;
};

function addGameRating({ rating }) {
  rateElement = document.createElement('div');
  rateElement.className = 'rating';
  rateElement.innerHTML = `<h1>${rating}</h1>`;
  return rateElement;
};

function addBtn({ id }) {
  btnElement = document.createElement('div');
  btnElement.className = 'btn-container';
  btnElement.innerHTML = `<button class="btn" id="${id}">Play</button>`;
  return btnElement; 
};

function addResponsible() {
  column = document.createElement('div');
  column.className = 'column';
  column.appendChild(raitingElement);
  column.appendChild(rateElement);
  column.appendChild(btnElement);
  gameElement.appendChild(column);
}

$( document ).ready(function() {
  $('.btn').click(function(e) {
    e.preventDefault();
    let data = {
      time: new Date(),
      btnID: parseInt(this.id),
    }
    console.log(data);
  })
})
