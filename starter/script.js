'use strict';
// document.querySelector('.message').textContent = '🎉 Correct answer...';

// document.querySelector('.guess').value = 23;

let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Selected...';
    displayMessage('No Number Selected...');
  } else if (guess === number) {
    // document.querySelector('.message').textContent = '🎉 Correct Number...';
    displayMessage('🎉 Correct Number...');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess>number ? '📈 Number is too high...!':'📈 Number is too high...!' ;
      displayMessage(
        (document.querySelector('.message').textContent =
          guess > number
            ? '📈 Number is too high...!'
            : '📈 Number is too low...!')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game...!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > number) {
  //   if (score > 1) {
  //     // document.querySelector('.message').textContent =
  //     //   '📈 Number is too high...!';
  //     displayMessage('📈 Number is too high...!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 You lost the game...!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     // document.querySelector('.message').textContent =
  //     //   '📉 Number is too low...!';
  //     displayMessage('📉 Number is too low...!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 You lost the game...!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
