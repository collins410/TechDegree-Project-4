/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase){
    this.phrase = phrase.toLowerCase();
  }

  // Displays the starting phrase on the game board
  addPhraseToDisplay(){
    const position = document.getElementById('phrase-ul');
    const string = game.activePhrase.phrase.toString();
    let letters = string.split('');
    let li = '';
    for(let i = 0; i < string.length; i++){
      if (letters[i] !== ' '){
        li += `<li class="hide letter ${letters[i]}">${letters[i]}</li>`;
      } else if (letters[i] === ' '){
        li += `<li class="space"> </li>`;
      }
    }
    position.innerHTML = li;
  }

  //Check to see if the letter selected by the player matches a letter in the phrase
  checkLetter(letter){
    // finds the location of the letter in the string and returns true if found or false if not found
    return (game.activePhrase.phrase.indexOf(letter) > -1)
  }

  //Reveal the letter(s) on the board that match the letter selected by the player.
  showMatchedLetter(letter) {
    const hiddenLetters = document.querySelectorAll(".hide, .letter");
    for (let i = 0; i < hiddenLetters.length; i++) {
      if (hiddenLetters[i].innerText.indexOf(letter) > -1) {
        hiddenLetters[i].className = "show";
      }
    }
  }
}
