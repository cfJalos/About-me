'use strict';

var fullName = prompt('What is your full name?')
console.log('Full name is ' + fullName);
alert('Hi ' + fullName + '!');

var wantsToPlayAGame = prompt('do you want to play a game 5 question game?');
if (wantsToPlayAGame.toLocaleLowerCase() === 'yes' || wantsToPlayAGame.toLocaleLowerCase() === 'y') {
  alert('Awesome ' + fullName + '! answer yes or no to guess. :)');
} else if (wantsToPlayAGame.toLocaleLowerCase() === 'no' || wantsToPlayAGame.toLocaleLowerCase() === 'n') {
  alert('Hope to see you agian ' + fullName + '!');
  }

var myLast = prompt('My last name is Jalos, yes or no?');
if (myLast.toLocaleLowerCase() === 'yes' || myLast.toLocaleLowerCase() === 'y') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! Next Question.' );
} else if (myLast.toLocaleLowerCase() === 'no' || myLast.toLocaleLowerCase() === 'n') {
  alert('Wrong! guess better next time.') ;
  }

var myFirst = prompt('Is my First name Czarl?');
if (myFirst.toLocaleLowerCase() === 'yes' || myFirst.toLocaleLowerCase() === 'y') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! Next Question.');
} else if (myFirst.toLocaleLowerCase() === 'no' || myFirst.toLocaleLowerCase() === 'n') {
  alert('Wrong! guess better next time.');
  }

var vet = prompt('Am i an Air force veteran?');
if (vet.toLocaleLowerCase() === 'no' || vet.toLocaleLowerCase() === 'n') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! I\'m a Navy veteran. Next Question.' );
} else if (vet.toLocaleLowerCase() === 'yes' || vet.toLocaleLowerCase() === 'y') {
  alert('I\'m a Navy veteran guess better next time.')
  }

var lang = prompt('Am i a Code fellow student?')
if (lang.toLocaleLowerCase() === 'yes' || lang.toLocaleLowerCase() === 'y') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! Check out my Biography.' );
} else if (lang.toLocaleLowerCase() === 'no' || lang.toLocaleLowerCase() === 'n') {
  alert('Wrong! guess better next time.');
  }

  alert('Thanks for playing yes or no' + fullName + '. Wanna play guess a number?');
  
  // This is the code for the 6th Question
  alert(' GUESS THE NUMBER!');
  
var randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10.. YOU HAVE 4 CHANCES");

var chances = 3;

for (var i = 1; i <= chances; i++) {
  var answer = '5';
  var index = i;
  if (randomNum === answer) {
    alert('Proceed to next level!');
    break;
  } else if (index === 3 && randomNum < answer) {
    alert('Still low! You\'re almost there! LAST CHANCE!');
    randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10."); 
      if (randomNum === answer) {
      alert('Correct! Proceed to next level!');
      break;
      } else if (randomNum !== answer){
      alert('You used up all your chances. Better luck next time!')
      }  
  } else if (index === 3 && randomNum > answer) {
      alert('Still High! You\'re almost there! LAST CHANCE!');
      randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10."); 
      if (randomNum === answer) {
        alert('Correct! Proceed to next level!');
        break;
    } else if (randomNum !== answer){
        alert('You used up all your chances. Better luck next time!')
        }  
  } else if (randomNum < answer) {
      alert('too low! try again!');
      randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10.")
    } else if (randomNum > answer) {
      alert('too high! try again!');
      randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10.")
    } 
}
    
  


