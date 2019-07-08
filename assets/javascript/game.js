$(document).ready(() => {
  var wordbank = ["variable", "bootstrap", "console", "objects", "javascript"];
  var displayword = [];
  var wincount = 0;
  var guessesLeft = 0;
  var letterbank = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var successcount = 0;
  var guessedletter = [];
  var cpuWord = "";
  var wordLength = 0;
  function gameReset() {
    displayword = [];
    successcount = 0;
    guessedletter = [];
    cpuWord = "";
    wordLength = 0;
  }
  function getword() {
    wordchoice = wordbank[Math.floor(Math.random() * 5)];
    return wordchoice;
  }
  function gameLose() {
    alert(
      "you've lost the game, better luck next time. Click the start button to play again."
    );
    gameReset();
  }
  function gameWin() {
    alert("congratulations you've won. Press the start button to play again.");
    wincount++;
    $("#wins#").text(wincount);
  }
  // START BUTTON
  $("#startbutton").on("click", () => {
    gameReset();
    cpuWord = getword();
    guessesLeft = cpuWord.length * 1.5 + 1;
    for (i = 0; i < cpuWord.length; i++) {
      displayword.push("-");
    }
    $("#curWord1").text(displayword);
  });
  // KEY GUESS
  $(document).on("keyup", () => {
    let letterguessed = event.key;
    wordLength = cpuWord.length;
    if (letterbank[letterguessed] != -1) {
      for (i = 0; i < wordLength; i++) {
        if (letterguessed === cpuWord[i]) {
          //letter is correct
          displayword[i] = letterguessed;
          $("#curWord1").text(displayword);
          successcount++;
          guessesLeft--;
          $("#numguess#").text(guessesLeft);
        } else if (
          cpuWord[letterguessed] === -1 &&
          guessedletter[letterguessed] === -1
        ) {
          $("#lettersguessed#").append(letterguessed);
          guessedletter.push(letterguessed);
          $("#lettersguessed#").append(letterguessed);
          guessesLeft--;
          $("#numguess#").text(guessesLeft);
        }
      }
    } else {
      return false;
    }
    if (successcount === cpuWord.length) {
      gameWin();
    }
    if (guessesLeft === 0 || guessesLeft < 0) {
      gameLose();
    }
  });
});
