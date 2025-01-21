 document.querySelector(`.guess`).value = `11`;
let count = 20;
let HighScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(`.check`).addEventListener('click', function () {
    let guess = document.querySelector(`.guess`).value;
    guess = Number(guess);

    //when there is no input
    if (!guess) {
        document.querySelector(`.message`).textContent = `🛑 NO Guess!`;

    }

    // when the player wins
    else if (guess === secretNumber) {
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector(`body`).style.backgroundColor = 'green';
        document.querySelector(`.number`).style.width = '30rem';
        document.querySelector(`.number`).style.fontsize = '15rem';
        document.querySelector(`.message`).textContent = `👍👍 Correct Guess!`;
       if (HighScore < 19) {
           HighScore++;
           document.querySelector(`.highscore`).textContent = HighScore;

       }
       else {
           document.querySelector(`.message`).textContent = `🎈🎈 You won! `;
       }
    }


// when the input is higher than the guess
    else if (guess > secretNumber) {
        document.querySelector(`.message`).textContent = `👆 The Guess is too High!`;
           if (count > 1) {
               count--;
               document.querySelector(`.score`).textContent = count;
               document.querySelector(`body`).style.backgroundColor = 'darkblue';
           }
           else {
               document.querySelector(`.message`).textContent = `You lost the Game😭😭 `;
           }
    }

    //when the input is lower than the guess
    else if (guess < secretNumber) {
        document.querySelector(`.message`).textContent = `👇 Guess is too low!`;
        if (count > 1) {
            count--;
            document.querySelector(`.score`).textContent = count;
            document.querySelector(`body`).style.backgroundColor = 'darkblue';
            document.querySelector(`body`).style.color = `black`;
        }
        else {
            document.querySelector(`.message`).textContent = `You lost the Game😭😭 `;
        }
    }
})

 document.querySelector(`.again`).addEventListener('click', function () {
     document.querySelector(`.guess`).value = '0';
     document.querySelector(`.message`).textContent = 'Start guessing...';
     document.querySelector(`.score`).textContent =  count = 20;
     document.querySelector(`body`).style.backgroundColor = ' #222';
 })
