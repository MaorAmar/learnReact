import React from 'react';

class CountUpClick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count:0};
    this.countUp = this.countUp.bind(this);
  }

  countUp () {
    const newCount = this.state.count + 1;
    this.setState({count: newCount});
  }

  render() {
    return(
      <div>
        <button onClick={this.countUp}>Count Up</button>
        <div>{this.state.count}</div>
      </div>
    )
  }
}
export default CountUpClick;