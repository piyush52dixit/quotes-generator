import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState([]);

  const getQuoteHandler = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * data.length);
        setQuote(data[randomNumber]);
      });
  };
  useEffect(() => {
    getQuoteHandler();
  }, []);

  return (
    <>
      <div className="container">
        <div className="git">
          <a target="blank" href="https://github.com/piyush52dixit">
            Github{" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg"></img>
          </a>
        </div>
        <p className="text">{quote.text}</p>
        <p className="author">{quote.author}</p>
        <div className="btns">
          <button class="glow-on-hover" onClick={getQuoteHandler}>
            Get Quote!
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${quote.text}`}
            target="_blank"
          >
            Tweet
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
