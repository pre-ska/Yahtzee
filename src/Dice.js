import React from "react";
import Die from "./Die";
import "./Dice.css";

const Dice = props => {
  // handleClick = () => {
  //   this.props.handleClick(this.props.id)
  // }

  return (
    <div className="Dice">
      {props.dice.map((d, idx) => (
        <Die
          handleClick={props.handleClick}
          val={d}
          locked={props.locked[idx]}
          idx={idx}
          key={idx}
          disabled={props.disabled}
          rolling={props.rolling && !props.locked[idx]}
        />
      ))}
    </div>
  );
};

export default Dice;
