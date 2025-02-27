

var p_quote = document.getElementById("p-quote");
var p_author = document.getElementById("p-author");

var quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "-Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: " -Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "-Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "-Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "-Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "-James Cameron"
    },
    {
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        author: "-John Lennon"
    }
]


function randomQuoteGenerator() {
    var randomIndex = Math.trunc(Math.random() * quotes.length);
    p_quote.innerHTML = quotes[randomIndex].quote;
    p_author.innerHTML = quotes[randomIndex].author;
}



