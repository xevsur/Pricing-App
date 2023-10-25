import { useState } from "react";
import "./App.css";
import PriceSlider from "./components/PriceSlider/PriceSlider";
import CheckBox from "./components/CheckBox/CheckBox";

const calculatePrice = (sliderValue: number, isDiscounted: boolean): number => {
  let price = 0;
  if (sliderValue === 1) {
    price = 8;
  } else if (sliderValue === 2) {
    price = 12;
  } else if (sliderValue === 3) {
    price = 16;
  } else if (sliderValue === 4) {
    price = 24;
  } else if (sliderValue === 5) {
    price = 36;
  }
  if (!isDiscounted) {
    price = ((price * 12) / 4) * 3;
  }
  return price;
};

function App() {
  const [sliderValue, setSliderValue] = useState(3);
  const [h2Text, setH2Text] = useState("100K PAGEVIEWS");
  const [price, setPrice] = useState(16);
  const [isLeft, setDiscount] = useState(true);

  const handleCheckbox = () => {
    setDiscount(!isLeft);
    const newPrice = calculatePrice(sliderValue, !isLeft);
    setPrice(newPrice);
  };

  const handleSliderChange = (newValue: number) => {
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
    const newPrice = calculatePrice(newValue, isLeft);
    setPrice(newPrice);
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
        <p className="Price">
          <span>${price}</span>
          {isLeft ? "/month" : "/year"}
        </p>
        <CheckBox isLeft={isLeft} handleCheckbox={handleCheckbox} />
        <div className="BorderLine"></div>
      </div>
      <div className="Features">
        <div className="feature">
          <img src="/images/icon-check.svg" alt="check" />
          <p>Unlimited websites</p>
        </div>
        <div className="feature">
          <img src="/images/icon-check.svg" alt="check" />
          <p>100% data ownership</p>
        </div>
        <div className="feature">
          <img src="/images/icon-check.svg" alt="check" />
          <p>Email reports</p>
        </div>
        <div className="ButtonDiv">
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default App;
