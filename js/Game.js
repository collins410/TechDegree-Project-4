/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  //Begins game by selecting a random phrase and calling the function to display blank tiles representing the random function to the user
  startGame() {
    document.getElementById('overlay').style.display =  'none';
    this.activePhrase = new Phrase(game.getRandomPhrase().phrase);
    this.activePhrase.addPhraseToDisplay();
  }

  //gets a random phrase from the phrase array
  getRandomPhrase (){
    let randomNumber = Math.floor((Math.random() * 5));
    return this.phrases[randomNumber];
  }

  //Handles the actions to take when a player clicks on a letter on the keyboard
  handleInteraction (button) {
    const wrongLetters = Array.from(document.querySelectorAll('.wrong'));
    let wrongLetter = wrongLetters.find(letter => letter === button);
    if (wrongLetter === button) {
      return button;
    } else if (game.activePhrase.checkLetter(button.innerText)) {
      button.className = 'chosen';
      game.activePhrase.showMatchedLetter(button.innerText);
      this.checkForWin();
    } else {
      button.className = 'wrong';
      this.removeLife();
    }
  }

  //Displays the original start screen and updates it to display a win or loss message
  gameOver(gameWon) {
    let overLay = document.getElementById('overlay');
    let string = this.activePhrase.phrase;
    if (gameWon){
      this.gameReset();
      overLay.className =  'win';
      overLay.style.display =  'flex';
      document.getElementById('game-over-message').innerText = `Great Job! you guessed the phrase:  ${string}`;
    } else {
      this.gameReset();
      document.getElementById('game-over-message').innerText = "You'll get it next time!";
      overLay.className =  'lose';
      overLay.style.display =  'flex';
    }
  }

  gameReset() {
    const phraseLi = document.getElementById('phrase-ul');
    const chosenLetters = document.querySelectorAll(".chosen");
    const wrongLetters = document.querySelectorAll(".wrong");
    const hearts = document.querySelectorAll(".tries");
    while (phraseLi.firstChild) {
      phraseLi.removeChild(phraseLi.firstChild);
    }
    for (let i = 0; i < chosenLetters.length; i++) {
        chosenLetters[i].className = 'key';
    }
    for (let i = 0; i < wrongLetters.length; i++) {
    wrongLetters[i].className = 'key';
    }
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].firstChild.src = 'images/liveHeart.png';
    }
  }

  createPhrases() {
    return [
      {
        phrase: 'it is better to have it and not need it than to not have it and need it'
      }
      ,
      {
        phrase: 'better to be safe than sorry'
      }
      ,
      {
        phrase: 'you only live once'
      }
      ,
      {
        phrase: 'onward and upward'
      }
      ,
      {
        phrase: 'if at first you do not succeed try and try again'
      }
    ]
  }





  //Check to see if the player has revealed all of the letters in the active phrase
  checkForWin (){
    let letters = document.querySelectorAll(".hide, .letter");
    if(letters.length < 1){
      this.gameOver(true);
    }
  }

  //Removes a life from the scoreboard and increments the missed property.  Calls the game over method after 5
  //missed guesses
  removeLife(){
      let liveHearts = document.getElementsByClassName("tries");
      if (this.missed < 5) {
          liveHearts[this.missed].firstChild.src = 'images/lostHeart.png';
          this.missed += 1;
      }
      if (this.missed === 5){
        this.gameOver(false);
      }
  }
}