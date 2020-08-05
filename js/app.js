'use strict';

var fullName = prompt('What is your full name?')
console.log('Full name is ' + fullName);
alert('Hi ' + fullName + '!');

var wantsToPlayAGame = prompt('do you want to play a game 5 question game?');
if (wantsToPlayAGame.toLocaleLowerCase() === 'yes' || wantsToPlayAGame.toLocaleLowerCase() === 'y') {
  alert('Awesome ' + fullName + '! answer yes or no to guess. :)');
} else {
  alert('Hope to see you agian ' + fullName + '!');
  }

var myLast = prompt('My last name is Jalos, yes or no?');
if (myLast.toLocaleLowerCase() === 'yes' || wantsToPlayAGame.toLocaleLowerCase() === 'y') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! Next Question.' );
} else {
  alert('Wrong! guess better next time.') ;
  }

var myFirst = prompt('Is my First name Czarl?');
if (myFirst.toLocaleLowerCase() === 'yes' || wantsToPlayAGame.toLocaleLowerCase() === 'y') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! Next Question.');
} else {
  alert('Wrong! guess better next time.');
  }

var vet = prompt('Am i an Air force veteran?');
if (vet.toLocaleLowerCase() === 'no' || wantsToPlayAGame.toLocaleLowerCase() === 'n') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! I\'m a Navy veteran. Next Question.' );
} else {
  alert('I\'m a Navy veteran guess better next time.')
  }

var lang = prompt('Am i a Code fellow student?')
if (lang.toLocaleLowerCase() === 'yes') {
  //console.log('You\' correct ' + fullName +'! Next Question.');
  alert('You\' correct ' + fullName +'! Check out my Biography.' );
} else {
  alert('Wrong! guess better next time and check out my Biography.');
  }


