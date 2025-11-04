import React, {useState} from 'react';

function CountDown(props) {
  const [count, setCount] = useState(props.count);
  function timeOutExample() {
    if(count){
      setCount(count - 1);
    }
  }
  setInterval(timeOutExample, 1000);
  return (
    <span>{count}</span>
  );
}
export default CountDown;