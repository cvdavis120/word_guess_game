$(document).ready(() => {
  wordbank: ["variable", "bootstrap", "console", "objects", "javascript"];
  displayfield: [];
  wincount: 0;
  letterbank: [
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
  guessedletter: [];
  wordchoice: "";

  function getword() {
    wordchoice = "";
    wordchoice = wordbank[Math.floor(Math.random() * 5)];
  }
  function lettercheck(x) {}
  function gamestart(i) {}
  function letterguessed(i) {}
});
