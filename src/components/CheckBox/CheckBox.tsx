import "./CheckBox.css";

interface CheckBoxProps {
  isLeft: boolean;
  handleCheckbox: () => void;
}

const CheckBox = ({ isLeft, handleCheckbox }: CheckBoxProps) => {
  return (
    <>
      <div className="billings">
        <p id="monthP">Monthly Billing</p>
        <div
          className={`CheckBox ${isLeft ? "left" : "right"}`}
          onClick={handleCheckbox}
        >
          <div className="slider"></div>
        </div>
        <p id="yearP">Yearly Billing</p>
        <div className="disc">
          -25%<span>discount</span>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
