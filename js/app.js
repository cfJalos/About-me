'use strict';

var gradeCounter = 0;

var fullName = prompt('What is your full name?')
console.log('Full name is ' + fullName);
alert('Hi ' + fullName + ' Let"s play a game!');

var wantsToPlayAGame = prompt('do you want to play a game 5 question game?');
if (wantsToPlayAGame.toLocaleLowerCase() === 'yes' || wantsToPlayAGame.toLocaleLowerCase() === 'y') {
  alert('Awesome ' + fullName + '! answer yes or no to guess. :)');
} else if (wantsToPlayAGame.toLocaleLowerCase() === 'no' || wantsToPlayAGame.toLocaleLowerCase() === 'n') {
  alert('Hope to see you agian ' + fullName + '!');
  }

var myLast = prompt('My last name is Jalos, yes or no?');
if (myLast.toLocaleLowerCase() === 'yes' || myLast.toLocaleLowerCase() === 'y') {
  //console.log('correct ' + fullName +'! Next Question.');
  gradeCounter += 1;
  alert('You\'re correct ' + fullName +'! Next Question.' );
} else if (myLast.toLocaleLowerCase() === 'no' || myLast.toLocaleLowerCase() === 'n') {
  alert('Wrong! guess better next time.') ;
  }

var myFirst = prompt('Is my First name Czarl?');
if (myFirst.toLocaleLowerCase() === 'yes' || myFirst.toLocaleLowerCase() === 'y') {
  //console.log('correct ' + fullName +'! Next Question.');
  gradeCounter += 1;
  alert('correct ' + fullName +'! Next Question.');
} else if (myFirst.toLocaleLowerCase() === 'no' || myFirst.toLocaleLowerCase() === 'n') {
  alert('Wrong! guess better next time.');
  }

var vet = prompt('Am i an Air force veteran?');
if (vet.toLocaleLowerCase() === 'no' || vet.toLocaleLowerCase() === 'n') {
  //console.log('correct ' + fullName +'! Next Question.');
  gradeCounter += 1;
  alert('correct ' + fullName +'! I\'m a Navy veteran. Next Question.' );
} else if (vet.toLocaleLowerCase() === 'yes' || vet.toLocaleLowerCase() === 'y') {
  alert('I\'m a Navy veteran guess better next time.')
  }

var lang = prompt('Is Hotdog a Sandwich?')
if (lang.toLocaleLowerCase() === 'yes' || lang.toLocaleLowerCase() === 'y') {
  //console.log('correct ' + fullName +'! Next Question.');
  gradeCounter += 1;
  alert('correct ' + fullName +'!.' );
} else if (lang.toLocaleLowerCase() === 'no' || lang.toLocaleLowerCase() === 'n') {
  alert('Wrong! guess better next time. :)');
  }

var lang = prompt('Am i a Code fellow student?')
if (lang.toLocaleLowerCase() === 'yes' || lang.toLocaleLowerCase() === 'y') {
  //console.log('correct ' + fullName +'! Next Question.');
  gradeCounter += 1;
  alert('correct ' + fullName +'! Check out my Biography.' );
} else if (lang.toLocaleLowerCase() === 'no' || lang.toLocaleLowerCase() === 'n') {
  alert('Wrong! guess better next time.');
  }

  alert('Thanks for playing yes or no' + fullName + '. Lets play guess a number!');
  
// This is the code for the 6th Question

alert(' GUESS THE NUMBER!');
  
var randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10.. YOU HAVE 4 CHANCES");

var chances = 3;

for (var i = 1; i <= chances; i++) {
  var answer = '5';
  var index = i;
  if (randomNum === answer) {
    gradeCounter += 1;
    alert('Proceed to next level!');
    //console.log('Correct! Proceed to next Question!');
    break;
  } else if (index === 3 && randomNum < answer) {
    alert('Still low! You\'re almost there! LAST CHANCE!');
    randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10."); 
      if (randomNum === answer) {
        gradeCounter += 1;
      alert('Correct! Proceed to next level!');
      //console.log('Correct! Proceed to next level!')
      break;
      } else if (randomNum !== answer){
      alert('You used up all your chances. Better luck next time!')
      }  
  } else if (index === 3 && randomNum > answer) {
      alert('Still High! You\'re almost there! LAST CHANCE!');
      randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10."); 
      if (randomNum === answer) {
        gradeCounter += 1;
        alert('Correct! Proceed to next Question!');
        //console.log('Correct! Proceed to next Question!');
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
    
// this is the 7th question game

alert(' GUESS MY TOP COUNTRY!');
alert('You have 6 chances to get it right!')

var randomAns;
var limiter;
var answers = ['japan','australia','thailand','brazil','chile','singapore'];

for ( var i = 0; i < answers.length; i++) { 
  
var endOfIndex = answers[answers.length - 1]; 
  
  if (limiter) {
    alert('Congratulations! you guess one of the answers. here"s all the possible answers. ' + answers);
    break;
  }
  if (answers[i] === endOfIndex) {
    alert('last chance to guess!!')
  }
  randomAns = prompt('Guess a country!')
  for ( var j = 0 ; j < answers.length; j++ ) {
    var lowCase = randomAns.toLowerCase(); 
    if (lowCase === answers[j]) {
      limiter += '0'
      gradeCounter += 1;
      alert('Good Job!');
      //console.log('Correct!')
      break;
    } else if (answers[j] === endOfIndex && lowCase !== answers[j]) {
      alert('Try again, Sorry!');
      break;
    }
  }
 if (answers[i] === endOfIndex && limiter === undefined )  {
   alert('You used up all your chances! review the possible answers ' + answers);
 }
  
}

alert('Out of 7 question you answered ' + gradeCounter + ' correct answer!');


