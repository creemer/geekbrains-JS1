var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var NEW_FOOD_TIME = 5000;

var isGameRunning = false;
var snakeTimer;
var snake = [];
var direction = 'x-';

function init() {
  var startButton = document.getElementById('snake-start');
  startButton.addEventListener('click', startGame);

  var renewButton = document.getElementById('snake-renew');
  renewButton.addEventListener('click', refreshGame);

  addEventListener('keydown', changeDirection);

  buildGameField();

}

function buildGameField() {
  var gameTable = document.createElement('table');
  gameTable.classList.add('game-table');

  for(var i = 0; i < FIELD_SIZE_X; i++) {
    var row = document.createElement('tr');
    row.classList.add('game-table-row');

    for(var j = 0; j < FIELD_SIZE_Y; j++) {
      var cell = document.createElement('td');
      cell.classList.add('game-table-cell');
      cell.classList.add('cell-' + i + "-" + j);

      row.appendChild(cell);
    }
    gameTable.appendChild(row);
  }

  document.getElementById('snake-field').appendChild(gameTable);
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37:
      if(direction != 'y+') {
        direction = 'y-';
      }
      break;
    case 38:
      if(direction != 'x+') {
        direction = 'x-';
      }
      break;
    case 39:
      if(direction != 'y-') {
        direction = 'y+';
      }
      break;
    case 40:
      if(direction != 'x-') {
        direction = 'x+';
      }
      break;

  }
}

function startGame() {
  isGameRunning = true;
  respawn();

  snakeTimer = setInterval(move, SNAKE_SPEED);
  setTimeout(createFood, NEW_FOOD_TIME);
}

function respawn() {
  var startCoordX = Math.floor(FIELD_SIZE_X / 2);
  var startCoordY = Math.floor(FIELD_SIZE_Y / 2);

  var snakeHead
    = document.getElementsByClassName('cell-' + startCoordX + '-' + startCoordY)[0];
  snakeHead.classList.add('snake-unit');

  var snakeTail
    = document.getElementsByClassName('cell-' + (startCoordX - 1) + '-' + startCoordY)[0];

  snakeTail.classList.add('snake-unit');

  snake = [];

  snake.push(snakeHead);
  snake.push(snakeTail);
}

function move() {
  var snakeHeadClasses = snake[snake.length - 1].classList;

  var newUnit;
  var snakeCoords = snakeHeadClasses[1].split('-');
  var coordX = parseInt(snakeCoords[1]);
  var coordY = parseInt(snakeCoords[2]);

  switch(direction) {
    case 'x-':
      newUnit = document.getElementsByClassName('cell-' + (coordX - 1) + '-' + coordY)[0];
      break;
    case 'x+':
      newUnit = document.getElementsByClassName('cell-' + (coordX + 1) + '-' + coordY)[0];
      break;
    case 'y-':
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY - 1))[0];
      break;
    case 'y+':
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY + 1))[0];
      break;
  }

  if(newUnit !== undefined && !newUnit.classList.contains('snake-unit') 
    && !newUnit.classList.contains('wall-unit')) { // добавил проверку на не стенку!

    newUnit.classList.add('snake-unit');
    snake.push(newUnit);
    showScore();                // Счёт обновляется при каждой итерации

    if(!newUnit.classList.contains('food-unit')) {
      var removed = snake.splice(0, 1)[0];
      removed.classList.remove('snake-unit');
    } else {
      newUnit.classList.remove('food-unit');
      createFood();                           //при съдании еды, сразу создается новая еда и стенка.            
      createWall();
    }
  } else {
    finishGame();
  }
}

function createFood() {
  var foodCreated = false;

  while(!foodCreated) {
    var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
    var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var foodCell = document.getElementsByClassName('cell-' + foodX + '-' + foodY)[0];

    if(!foodCell.classList.contains('snake-unit')) {
      foodCell.classList.add('food-unit');
      foodCreated = true;
    } else {
      createFood();  // так же поправил баг. Если еда хотела попать на поле змейки,      
    }                // происходила ошибка, и еда больше не создавалась. 
  }
}

function showScore() {
  var score = document.getElementById('scoreField');
  
  score.innerHTML = 'Your score is : ' + (snake.length - 3);
}

function createWall() {                         // создание препятсвий происходит по аналогии с созданием еды.
    var wallCreated = false;

  while(!wallCreated) {
    var wallX = Math.floor(Math.random() * FIELD_SIZE_X);
    var wallY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var wallCell = document.getElementsByClassName('cell-' + wallX + '-' + wallY)[0];

    if(!wallCell.classList.contains('snake-unit')) {
      wallCell.classList.add('wall-unit');
      wallCreated = true;
    }
  }
}

function finishGame() {
  clearInterval(snakeTimer);
  isGameRunning = false;

  alert('GAME OVER!!! \n Your score is : ' + (snake.length - 3) ); // вывод конечного счёта при окончании игры.
}

function refreshGame() {
  location.reload();
}

window.onload = init;
