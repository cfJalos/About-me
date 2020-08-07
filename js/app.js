'use strict';

var gradeCounter = 0;

var fullName = prompt('What is your full name?')
console.log('Full name is ' + fullName);
alert('Hi ' + fullName + ' Let"s play a game!');

var qOneAnswer = ['yes','y','no','n'];
var qSixAnswer = ['5'];
var qSevenAnswers = ['japan','australia','thailand','brazil','chile','singapore'];

function question(string){
  var random = prompt(string);
  for (var i = 0; i < qOneAnswer.length; i++)
  if (random.toLocaleLowerCase() === qOneAnswer[0] || random.toLocaleLowerCase() === qOneAnswer[1]) {
    alert('You\'re correct ' + fullName +'! Next Question.' );
    break;
  } else if (random.toLocaleLowerCase() === qOneAnswer[2] || random.toLocaleLowerCase() === qOneAnswer[3]) {
    alert('Wrong! guess better next time.') ;
    break;
    } else {
      alert('Please answer yes or no/ y or n');
      random = prompt(string);
    }
    return random;
}

question('My last name is Jalos, yes or no?');
question('Is my First name Czarl?');
question('Am i an Navy veteran?');
question('Is Hotdog a Sandwich?');
question('Am i an Student at Codefellows?');

alert('Thanks for playing yes or no ' + fullName + '. Lets play guess a number!');
  
// This is the code for the 6th Question

alert(' GUESS THE NUMBER!');


function guess(){

var chances = 4;
  
for (var i = 1; i <= chances; i++) {
 var randomNum = prompt("PICK A NUMBER BETWEEN 1 AND 10.");
 var index = i;
  if (randomNum === qSixAnswer) {
    gradeCounter += 1;
    alert('Correct!Proceed to next question!');
    //console.log('Correct! Proceed to next Question!');
    break;
  } else if (index === 4 && randomNum !== qSixAnswer) {
    alert('You used up all your chances. Better luck next time!')
  } else if (randomNum < qSixAnswer) {
      alert('too low! try again!');
      
  } else if (randomNum > qSixAnswer) {
      alert('too high! try again!');
  } 
 }
}

guess();

// this is the 7th question game

alert(' GUESS MY TOP COUNTRY!');
alert('You have 6 chances to get it right!')

function country() {
  var randomAns;
  var limiter;

  for ( var i = 1; i <= 6; i++) { 
  
    if (limiter) {
      alert('Congratulations! you guess one of the answers. here"s all the possible answers. ' + answers);
      break;
    }
    if (i === 6) {
      alert('Last chance to guess!!')
    }
    randomAns = prompt('Guess my top Country!')

    for ( var j = 0 ; j < qSevenAnswers.length; j++ ) {
      var lowCase = randomAns.toLowerCase(); 
      if (lowCase === qSevenAnswers[j]) {
        limiter += '0'
        // gradeCounter += 1;
        alert('Good Job! you got it right! Check out my biography');
        //console.log('Correct!')
        break;
      } else if (qSevenAnswers[j] === qSevenAnswers[qSevenAnswers.length-1] && lowCase !== qSevenAnswers[j]) {
        alert('Try again, Sorry!');
        break;
      }
    }
   if (i === 6 && limiter === undefined )  {
     alert('You used up all your chances! review the possible answers ' + qSevenAnswers);
   }

  }
}
country();

alert('Out of 7 question you answered ' + gradeCounter + ' correct answer!');


