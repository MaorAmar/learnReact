import React, {useState} from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  
  function toIncrease() {
    setCount(count + 1);
  }

  function toDecrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      <button onClick = {toIncrease}>increase</button>
      <button className="myDiv" onClick = {toDecrease}>decrease</button>
      <button className="myDiv" onClick = {reset}>reset</button>
      <div className="myDiv">{count}</div>
    </div>
  )
}

export default Counter;