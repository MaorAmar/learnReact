import React, {useState} from 'react';

function CountButton() {
  const [count,setCount] = useState(0);
  function countUp(){
    setCount(count + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={countUp}>Click Me</button>
    </div>
  )
  
}
export default CountButton;