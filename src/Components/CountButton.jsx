import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button'; 

function CountButton(props) {
  useEffect(() => {
    let counter;
    if(props.load) {
      counter = props.load('counter');
    }
    const initialCounter = Number(counter) || 0;
    setCount(initialCounter);
  },[]);
  const [count,setCount] = useState(0);
  function countUp(){
    setCount(count + 1);
    if(props.save){
      props.save('counter', count + 1);
    }
  }
  function clearAll(){
    setCount(0)
    if(props.clear){
      props.clear();
    }
  }
  return (
    <div>
      <h2>{count}</h2>
      <Button variant="contained" color="primary" onClick={countUp}>Increase</Button>     
      <Button variant="contained" color="primary" onClick={clearAll}>Clear All</Button>
    </div>
  )
  
}
export default CountButton;