import { useEffect, useState } from "react";
import "./App.css";
import { generateRandomColor } from "./RandomColor";
import { FaTwitter } from "react-icons/fa";
import { GrTumblr } from "react-icons/gr";
import { ImQuotesLeft } from "react-icons/im";

function App() {
  const [color, setColor] = useState("rgb(169, 169, 169)");
  const [quote, setQuote] = useState("quote");
  const [author, setAuthor] = useState("authors");

  const clickHandler = () => {
    setColor(generateRandomColor);
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data.data[0].quoteText; // Assuming the API response has the quote text under 'quoteText' field
        const randomauthor = data.data[0].quoteAuthor;

        setQuote(randomQuote);
        setAuthor(randomauthor);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    clickHandler();
  }, []);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        background: `${color}`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="quote-box">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div id="text" style={{ color: `${color}` }}>
            <ImQuotesLeft style={{ paddingRight: "5px" }} />
            <p style={{ transition: "all 1s ease" }}>{quote}</p>
          </div>
          <div
            id="author"
            style={{
              fontSize: "1em",
              textAlign: "right",
              color: `${color}`,
              marginTop: "30px",
            }}
          >
            {author}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <a
              id="tweet-quote"
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=&caption=${encodeURIComponent(
                quote
              )}`}
              style={{
                height: "45px",
                border: "none",
                borderRadius: "3px",
                color: "#fff",
                backgroundColor: `${color}`,
                outline: "none",
                fontSize: "0.85em",
                margin: "10px",
                padding: "15px",
                opacity: "1",
                cursor: "pointer",
              }}
            >
              <GrTumblr />
            </a>
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                quote
              )}`}
              style={{
                height: "45px",
                border: "none",
                borderRadius: "3px",
                color: "#fff",
                backgroundColor: `${color}`,
                outline: "none",
                fontSize: "0.85em",
                margin: "10px",
                padding: "15px",
                opacity: "1",
                cursor: "pointer",
              }}
            >
              <FaTwitter />
            </a>
          </div>
          <button
            onClick={clickHandler}
            style={{
              height: "38px",
              width: "max-content",
              border: "none",
              borderRadius: "3px",
              color: "#fff",
              backgroundColor: `${color}`,
              outline: "none",
              fontSize: "0.85em",
              padding: "5px ",
              opacity: "1",
              cursor: "pointer",
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
