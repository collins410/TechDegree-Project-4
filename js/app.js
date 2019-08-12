/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

//Adds an event listener to the start button allowing the game to begin
//within this event listener is another listener added to monitor each key being pressed on the onscreen keyboard
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