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
  alert('Wrong! guess better next time and check out my Biography.');
  }


