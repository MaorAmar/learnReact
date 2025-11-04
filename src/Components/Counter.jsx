import React, {useState} from 'react';

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
      <button onClick = {toDecrease}>decrease</button>
      <button onClick = {reset}>reset</button>
      <div>{count}</div>
    </div>
  )
}

export default Counter;