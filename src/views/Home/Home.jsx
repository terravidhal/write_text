import React, { useState } from "react";
import "./Home.css";
import { useEffect } from "react";




const Home = () => {
  const [text, setText] = useState([
    "ceci est le debut",
    "le ciel est bleu",
    "hiver et automne",
    "il fait beau",
  ]);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);



  const tokenizeText = (textArray) => {
    const tokens = [];
    for (const elt of textArray) {
      tokens.push(...elt.split(" ").map((eltnew) => eltnew + ' '));
    }
    console.log('tokens', tokens);
    return tokens;
  };

  

  const animateText = () => {
    const tokens = tokenizeText(text);
    const intervalId = setInterval(() => {

      setCurrentTokenIndex((prevIndex) => 
        prevIndex + 1 <= tokens.length ? prevIndex + 1 : tokens.length
      );

      if (currentTokenIndex === tokens.length) {
        clearInterval(intervalId);
      }
    }, 120);
  };

 

  useEffect(() => {
    animateText();
  }, []);



  return (
    <div className="Home">
      <div className="home-content">
        {tokenizeText(text)
          .slice(0, currentTokenIndex)
          .map((token, index) => (
            <span key={index}>{token + " "}</span>
          ))}
      </div>
    </div>
  );
};


export default Home;
