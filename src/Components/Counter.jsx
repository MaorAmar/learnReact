import React, {useState, useEffect} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {console.log('re-rendered!')});
  
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