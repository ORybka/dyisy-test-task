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
    stars: 5
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
    stars: 5
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
    stars: 5
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
    stars: 5
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
    stars: 5
  }
]

const gameContainer = document.querySelector('.game-container');

function createGame() {
  game.forEach((el) => {
    addGame(el);
    addImage(el);
    addDescription(el);
    addStars(el);
    addGameRating(el);
    addBtn();
  });
}

function addGame({ id }) {
  gameElement = document.createElement('div');
  gameElement.className = 'game';
  gameElement.id = id;
  gameContainer.appendChild(gameElement);
};

function addImage({ name, label }) {
  imageElement = document.createElement('div');
  imageElement.className = 'image-container';
  imageElement.innerHTML = `
  <img src="assets/${name}.jpg"><span class="game-label">${label}</span>`;
  gameElement.appendChild(imageElement);
};

function addDescription({ description, price, bonus}) {
  infoElement = document.createElement('div');
  infoElement.className = 'description-container';
  infoElement.innerHTML = `<span class="description">${description}</span><span class="price">${price}</span><span class="bonus">${bonus}</span>`;
  gameElement.appendChild(infoElement);
};

function addStars({ userNum, stars }) {
  raitingElement = document.createElement('div');
  raitingElement.className = 'rating-stars';
  raitingElement.innerHTML = `<span>Rating(${userNum})</span>`;
  container =  document.createElement('div');
  star = document.createElement('img');
  star.src = 'assets/star.png';
  star.alt = 'star';
  starNum = stars;
  // for (let i = 1; i <= starNum; i++){
  //   container.insertAdjacentHTML('afterbegin', star);
  //   container.classList.add('fill');
  //   container.appendChild(raitingElement);
  // }
  gameElement.appendChild(raitingElement);
};

function addGameRating({ rating }) {
  rateElement = document.createElement('div');
  rateElement.className = 'rating';
  rateElement.innerHTML = `<h1>${rating}</h1>`;
  gameElement.appendChild(rateElement);
};

function addBtn() {
  btnElement = document.createElement('div');
  btnElement.className = 'btn-container';
  btnElement.innerHTML = '<button>PLAY</button>';
  gameElement.appendChild(btnElement);
};
