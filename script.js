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

  const pastraces = document.getElementById('past-races')
  pastraces.removeChild(pastraces.children[3])

  // Part 6

  const newRace = document.createElement('li')
  newRace.textContent = "New York"
  pastraces.appendChild(newRace)

  // Part 7

  const firstParent = document.querySelector('.main')
  const newBlogPost = document.createElement('div')
  newBlogPost.classList.add('blog-post','black')
  firstParent.appendChild(newBlogPost)
  const newH1 = document.createElement('h1')
  newH1.textContent = "New York"
  newBlogPost.appendChild(newH1)
  newP = document.createElement('p')
  newP.textContent='I raced in New York'
  newBlogPost.appendChild(newP)

  // Part 8

  const quoteTitle = document.getElementById('quote-title')
  //console.log(quoteTitle)
  quoteTitle.addEventListener("click", randomQuote)

  // Part 9

  const blogPostClassElements = document.querySelectorAll(".blog-post")
  for(let each of blogPostClassElements){
  each.addEventListener("mouseenter",() => {each.classList.toggle("red")})
  each.addEventListener("mouseout",() => {each.classList.toggle("purple")})
  }
  });


});
