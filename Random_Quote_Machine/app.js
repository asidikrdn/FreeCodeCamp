let tombol = document.getElementById('new-quote');
let twitter = document.getElementById('tweet-quote');
let quote = document.getElementById('text');
let author = document.getElementById('author');

let colorClass = [
  'primary', 'info', 'warning', 'danger', 'success'
]

const ambilData = () => {
  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  fetch(url).then(data => { return data.json() }).then(res => {
    console.log(res.quotes[Math.floor(Math.random() * res.quotes.length)]);

    quote.innerHTML = '"' + res.quotes[Math.floor(Math.random() * res.quotes.length)].quote + '"';
    author.innerHTML = '- ' + res.quotes[Math.floor(Math.random() * res.quotes.length)].author;

    let color = colorClass[Math.floor(Math.random() * colorClass.length)];
    document.getElementsByTagName('body')[0].className = 'text-' + color + ' bg-' + color;
    twitter.className = 'btn btn-' + color;
    tombol.className = 'btn btn-' + color;
  });
}

window.addEventListener("load", ambilData);

tombol.addEventListener('click', ambilData);