/*
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
*/

import React from "react";
class TodayTime extends React.Component {
  constructor(props) {
    super(props);
    this.interval = setInterval(() => {
      this.upTime();
    }, 1000);
    this.state = { time: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.upTime();
    }, 1000);
  }

  upTime() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <React.Fragment>{this.state.time}</React.Fragment>;
  }
}
export default TodayTime;
