import React, {useState} from 'react';
import Watch from './Watch';

function TodayTime() { 
  const [today, setToday] = useState(Date.now());
  function upTime() {
    setToday(Date.now());
  }
  setInterval(upTime, 1000); 
  
  return ( 
    <Watch milliseconds={today} /> 
  ); 
} 
export default TodayTime;