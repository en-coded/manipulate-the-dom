let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1

const updateText = document.querySelector("#main-title");
updateText.textContent = "Hello World";

  // Part 2

const updateBackColor = document.querySelector("body");
updateBackColor.style.backgroundColor = "lightblue";

  // Part 3

var elem = document.getElementById("favorite-things");
elem.removeChild(elem.lastElementChild);

  // Part 4

var x = document.getElementsByClassName("special-title");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.fontsize = "2rem";
}

const specTitle = document.querySelectorAll(".special-title");
specTitle.forEach(function(title) {
  title.style.fontsize = "2rem";
});

  // Part 5

var races = document.getElementById("favorite-things");

  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
