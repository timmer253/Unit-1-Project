// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

  var quotes = [
    {
      quote: "If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it",
      source: "Michael Jordan",
      citation: "Chicago Bulls",
      date: " ",
      category: "Success",
    },

    {
      quote: "There are three types of people. Those who make it happen, those who watch it happen, and those who wonder what happened.",
      source: "Tommy Lasorda",
      citation: "Los Angeles Dodgers",
      date: " ",
      category: "Sports",
    },

    {
      quote: "If you have everything under control, you're not moving fast enough.",
      source: "Mario Andretti",
      citation: "Racing Driver",
      date: " ",
      category: "Life",
    },

    {
      quote: "You can’t put a limit on anything. The more you dream, the farther you get.",
      source: "Michael Phelps",
      citation: "Olympic Swimmer",
      date: " ",
      category: "Success",
    },

    {
      quote: "Today I will do what others won’t, so tomorrow I can accomplish what others can’t.",
      source: "Jerry Rice",
      citation: "San Francisco 49ers",
      date: " ",
      category: "Sports",
    }
  ];

// quote index basket
var quoteBasket = [];

//function to push indices to empty quoteBasket array
function pushIndices(quote,index){
  quoteBasket.push(index);
}

//puts quote data into basket
quotes.forEach(pushIndices);

// select and return random quote object
var getRandomQuote = function getRandomQuote() {

    // if the quotebasket is empty fill it back up
    if (quoteBasket.length < 1){
        quotes.forEach(pushIndices);
    }

    // generate a random number based off the basket array length
    var randomNumber = Math.floor(Math.random() * quoteBasket.length);

    // get an index from the basket array
    var quoteIndex = quoteBasket[randomNumber];

    // remove the index from the basket array in preparation
    quoteBasket.splice(randomNumber, 1);

    return quotes[quoteIndex];

};


// function that concatenates and prints all aforementioned info as a random quote to the page
var printQuote = function printQuote(quoteObject) {

    var builtQuote;

    if (quoteObject.source && quoteObject.citation && quoteObject.year) {
        builtQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source  + '<span class="citation">' + quoteObject.citation  + '</span> <span class="year">' + quoteObject.year + '</span> </p>';
    } else if (quoteObject.source && quoteObject.citation) {
        builtQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source  + '<span class="citation">' + quoteObject.citation  + '</span> </p>';
    } else if (quoteObject.source) {
        builtQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source + '</span> </p>';
    } else {
        builtQuote = '<p class="quote">' + quoteObject.quote  + '</p>';
    }

    document.getElementById('quote-box').innerHTML = builtQuote;

};

// pick a color, any color!
var changeBackground = function changeBackground() {

    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    if (randomColor !== 'rgb(255,255,255)') {
        document.body.style.backgroundColor = randomColor;
    }
};

// Interval timer for changing background
setInterval(function () {
  printQuote(getRandomQuote());
  changeBackground();
},
   15000);

// listen for the click!
document.getElementById('loadQuote').addEventListener("click",
    function() {
        printQuote(getRandomQuote());
        changeBackground();
    }, false);
