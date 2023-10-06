import React, { useState } from "react";
import "./word counter.css"; // Import your custom CSS file for styling

const WordCounter = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  // Split the text by spaces to count words
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="word-counter">
      <h1>Responsive Word Counter</h1>
      <textarea
        rows="6"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleChange}
      />
      <div className="word-count">
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
};

export default WordCounter;
