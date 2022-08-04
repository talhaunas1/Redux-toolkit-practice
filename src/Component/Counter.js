import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  selectValue,
  decrement,
  reset,
} from "../features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectValue);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <p> {count} </p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
