import React, {useState} from 'react';
function CountUp() {
  const [i, setI] = useState(0); 
  function timeOutExample() { 
    setI(i + 1); 
  } 
  setInterval(timeOutExample, 1000);
  return (<span>{i}</span>)
}

export default CountUp;