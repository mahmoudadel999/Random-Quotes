// var TheQuote = document.getElementById('quote'),
//   quotedBy = document.getElementById('quoted-by'),
//   TheButton = document.getElementById('btn');

// function randomQuote() {
//   var quotes = [
//     {
//       quote: '“Be yourself; everyone else is already taken.”',
//       writer: '― Oscar Wilde',
//     },

//     {
//       quote:
//         "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
//       writer: '― Marilyn Monroe',
//     },

//     {
//       quote:
//         "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
//       writer: '― Albert Einstein',
//     },

//     {
//       quote: '“So many books, so little time.”',
//       writer: '― Frank Zappa',
//     },

//     {
//       quote: '“A room without books is like a body without a soul.”',
//       writer: '― Marcus Tullius Cicero',
//     },
//   ];

//   var radomNumber = Math.floor(Math.random() * quotes.length);

//   var newRandom = Math.floor(Math.random() * quotes.length);

//   if (newRandom === radomNumber) {
//     TheQuote.innerHTML = quotes[newRandom].quote;
//     quotedBy.innerHTML = quotes[newRandom].writer;
//   } else {
//     TheQuote.innerHTML = quotes[radomNumber].quote;
//     quotedBy.innerHTML = quotes[radomNumber].writer;
//   }
// }

var TheQuote = document.getElementById('quote'),
  quotedBy = document.getElementById('quoted-by'),
  TheButton = document.getElementById('btn');

var newRandom = 0;

function randomQuote() {
  var quotes = [
    {
      quote: '“Be yourself; everyone else is already taken.”',
      writer: '― Oscar Wilde',
    },

    {
      quote:
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      writer: '― Marilyn Monroe',
    },

    {
      quote:
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      writer: '― Albert Einstein',
    },

    {
      quote: '“So many books, so little time.”',
      writer: '― Frank Zappa',
    },

    {
      quote: '“A room without books is like a body without a soul.”',
      writer: '― Marcus Tullius Cicero',
    },
  ];

  var radomNumber = Math.floor(Math.random() * quotes.length);

  if (newRandom === radomNumber) {
    radomNumber = Math.floor(Math.random() * quotes.length);

    TheQuote.innerHTML = quotes[radomNumber].quote;
    quotedBy.innerHTML = quotes[radomNumber].writer;
  } else {
    TheQuote.innerHTML = quotes[radomNumber].quote;
    quotedBy.innerHTML = quotes[radomNumber].writer;
  }
  newRandom = radomNumber;
}
