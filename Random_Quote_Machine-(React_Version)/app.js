const Quote = (props) => {
  const [quote, setQuote] = React.useState();
  const [author, setAuthor] = React.useState();
  const bodyRef = React.useRef(document.querySelector('body'));
  const twitterRef = React.useRef();
  const tombolRef = React.useRef();
  const colorClass = React.useRef([
    'primary', 'info', 'warning', 'danger', 'success'
  ])

  const ambilData = () => {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    fetch(url).then(data => { return data.json() }).then(res => {
      console.log(res.quotes[Math.floor(Math.random() * res.quotes.length)]);

      setQuote(res.quotes[Math.floor(Math.random() * res.quotes.length)].quote)
      setAuthor(res.quotes[Math.floor(Math.random() * res.quotes.length)].author)
    });

    let color = colorClass.current[Math.floor(Math.random() * colorClass.current.length)];
    bodyRef.current.className = `text-${color} bg-${color}`;
    twitterRef.current.className = `text-white btn btn-${color}`;
    tombolRef.current.className = `text-white btn btn-${color}`;

    // console.log(color);
    // console.log(bodyRef.current.className)
  }

  React.useEffect(() => { ambilData() }, [])

  return (
    <div
      id="quote-box"
      className="d-flex flex-row flex-wrap justify-content-center bg-light p-5"
    >
      <div id="text" className="text-center p-2">"{quote}"</div>
      <div id="author" className="w-100 text-end mt-3 px-2 py-1">- {author}</div>
      <div
        id="button"
        className="w-100 d-flex justify-content-between mt-2 px-2 py-1"
      >
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          ref={twitterRef}
        >
          <i className="bi-twitter"></i>
        </a>
        <button id="new-quote" ref={tombolRef} onClick={ambilData}>Next Quote</button>
      </div>
    </div>
  )
}

const MyApp = () => {
  return (
    <div
      id="wrapper"
      className="d-flex justify-content-start align-items-center"
    >
      <Quote />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);