import React, { useState } from "react";
import "./PriceSlider.css";

const PriceSlider: React.FC = () => {
  const [value, setValue] = useState(3);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const getProgressWidth = () => {
    const range = 5 - 1;
    const progress = ((value - 1) / range) * 100;
    return `${progress}%`;
  };

  return (
    <div className="range-slider-container">
      <input
        type="range"
        min={1}
        max={5}
        step={1}
        value={value}
        onChange={handleChange}
        className="range-slider"
      />
      <div className="progress-bar" style={{ width: getProgressWidth() }} />
    </div>
  );
};

export default PriceSlider;
