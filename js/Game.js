/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  //Begins game by selecting a random phrase and displaying it to the user
  startGame() {
    document.getElementById('overlay').style.display =  'none';
    const randomPhrase = game.getRandomPhrase();
    const phrase = new Phrase(randomPhrase.phrase);
    phrase.addPhraseToDisplay();
  }

  //Displays the original start screen and updates it to display a win or loss message
  gameOver(gameWon) {
    let overLay = document.getElementById('overlay');
    if (gameWon){
      alert('game has been won');
    } else {
      alert('game has been lost');
      overLay.className =  'lose';
      overLay.style.display =  'flex';
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


  getRandomPhrase (){
    let randomNumber = Math.floor((Math.random() * 5));
    this.activePhrase = this.phrases[randomNumber];
    return this.phrases[randomNumber];
  }

  handleInteraction (){

  }

  //Check to see if the player has revealed all of the letters in the active phrase
  checkForWin (){
    let letters = document.querySelectorAll(".hide, .letter");
    if(letters.length < 1){
      return true;
    } else {
      return false;
    }
  }

  //Removes a life from the scoreboard and increments the missed property.  Calls the game over method after 5
  //missed guesses
  removeLife (letter){
    if (phrase.checkLetter(letter)){
      return true;
    } else {
      let liveHearts = document.getElementsByClassName("tries");
      if (this.missed < 5) {
        for (let i = 0; i < this.missed; i++) {
          let child = liveHearts[i].firstChild;
          child.src = 'images/lostHeart.png';
          this.missed += 1;
        }
      } else if (this.missed === 5){
        game.gameOver();
      }
    }
  }

}