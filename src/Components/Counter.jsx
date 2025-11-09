import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button'; 
import ButtonGroup from '@mui/material/ButtonGroup';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("re-rendered!");
  });

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
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={toIncrease}>increase</Button>
        <Button onClick={toDecrease}>decrease</Button>
        <Button onClick={reset}>reset</Button>
      </ButtonGroup>
      <div>{count}</div>
    </div>
  );
}

// באמצעות Class Components
/*
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.toIncrease = this.toIncrease.bind(this);
    this.toDecrease = this.toDecrease.bind(this);
    this.reset = this.reset.bind(this);
  }
  toIncrease() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }
  toDecrease() {
    const newCount = this.state.count - 1;
    this.setState({ count: newCount });
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <button onClick={this.toIncrease}>increase</button>
        <button onClick={this.toDecrease}>decrease</button>
        <button onClick={this.reset}>reset</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}
*/
export default Counter;
