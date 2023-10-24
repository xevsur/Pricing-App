import React from "react";
import "./CheckBox.css";

interface CheckBoxProps {
  isLeft: boolean;
  handleCheckbox: () => void;
}

const CheckBox = ({ isLeft, handleCheckbox }: CheckBoxProps) => {
  return (
    <div
      className={`CheckBox ${isLeft ? "left" : "right"}`}
      onClick={handleCheckbox}
    >
      <div className="slider"></div>
    </div>
  );
};

export default CheckBox;
