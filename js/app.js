/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

let button = document.getElementById('btn__reset');
button.addEventListener('click', (e) => {
  game = new Game();
  game.startGame();
});