import React from "react";
import "./PriceSlider.css";

interface PriceSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const PriceSlider: React.FC<PriceSliderProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange(newValue);
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
