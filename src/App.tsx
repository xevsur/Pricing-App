import "./App.css";
import PriceSlider from "./components/PriceSlider";

function App() {
  return (
    <div className="MainDiv">
      <div className="bgRectangle">
        <img src="/images/pattern-circles.svg" alt="crls" />
      </div>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required. </p>
      <div className="PricingForm">
        <PriceSlider />
      </div>
    </div>
  );
}

export default App;
