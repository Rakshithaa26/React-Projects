import React, { useState } from "react";
import "./colorpicker.css"; // Import the CSS file for styling

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker-container">
      <div className="color-picker">
        <button
          onClick={handleButtonClick}
          style={{ backgroundColor: selectedColor || "" }}
        >
          Pick a color
        </button>
        {showColorList && (
          <ul className="color-list">
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></li>
            ))}
          </ul>
        )}
      </div>
      {selectedColor && (
        <p className="selected-color">Selected Color: {selectedColor}</p>
      )}
    </div>
  );
};

export default ColorPicker;
