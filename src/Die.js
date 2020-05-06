import React from "react";
import "./Die.css";

const Die = ({
  numberWords,
  locked,
  val,
  disabled,
  rolling,
  handleClick,
  idx,
}) => {
  let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-4x `;
  if (locked) classes += "Die-locked";
  if (rolling) classes += "Die-rolling";
  return (
    <i
      className={classes}
      onClick={() => handleClick(idx)}
      disabled={disabled}
    />
  );
};

Die.defaultProps = {
  numberWords: ["one", "two", "three", "four", "five", "six"],
  val: 5,
};

export default Die;
