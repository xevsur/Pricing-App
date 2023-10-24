import React, { useState } from "react";
import "./App.css";
import PriceSlider from "./components/PriceSlider";

function App() {
  const [sliderValue, setSliderValue] = useState(3);
  const [h2Text, setH2Text] = useState("100K PAGEVIEWS");

  const handleSliderChange = (newValue: React.SetStateAction<number>) => {
    setSliderValue(newValue);

    if (newValue === 1) {
      setH2Text("10K PAGEVIEWS");
    } else if (newValue === 2) {
      setH2Text("50K PAGEVIEWS");
    } else if (newValue === 3) {
      setH2Text("100K PAGEVIEWS");
    } else if (newValue === 4) {
      setH2Text("500K PAGEVIEWS");
    } else if (newValue === 5) {
      setH2Text("1M PAGEVIEWS");
    }
  };

  return (
    <div className="MainDiv">
      <div className="bgRectangle">
        <img src="/images/pattern-circles.svg" alt="crls" />
      </div>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required. </p>
      <div className="PricingForm">
        <h2>{h2Text}</h2>
        <PriceSlider value={sliderValue} onChange={handleSliderChange} />
      </div>
    </div>
  );
}

export default App;
