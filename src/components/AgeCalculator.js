import React, { useState } from "react";
import "./AgeCalculator.css"; // Import the CSS file for styling

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const [day, month, year] = birthDate.split("/");
      const birthYear = parseInt(year, 10);
      const currentYear = new Date().getFullYear();

      if (!isNaN(day) && !isNaN(month) && !isNaN(birthYear)) {
        const birthDateObj = new Date(
          birthYear,
          parseInt(month, 10) - 1,
          parseInt(day, 10)
        );
        const ageDiffMs = Date.now() - birthDateObj.getTime();
        const ageDate = new Date(ageDiffMs);
        const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        setAge(calculatedAge);
      } else {
        setAge(null);
      }
    } else {
      setAge(null);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label>Enter your birthdate (DD/MM/YYYY):</label>
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age !== null && (
        <p className="result">
          Your age is <span>{age}</span> years.
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
