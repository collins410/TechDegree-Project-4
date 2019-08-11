/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const button = document.getElementById('btn__reset');
const keyboard = document.querySelectorAll('.key');
button.addEventListener('click', () => {
  game = new Game();
  game.startGame();
  for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener('click', (e) => {
      game.handleInteraction(e.target);
    });
  }
});