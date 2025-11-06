import React from 'react';

class Cyber extends React.Component {
  constructor(props){
    super(props);
    this.state = {CyberAttack: 1000};
    this.upTenAllSec = this.upTenAllSec.bind(this);
  }
  upTenAllSec() {
    const newAttack = this.state.CyberAttack + 10;
    this.setState({CyberAttack: newAttack});
  }

  componentDidMount() {
    this.interval = setInterval(this.upTenAllSec, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        Cyber Attacks: 
        {this.state.CyberAttack}
      </div>
    )
  }
}

export default Cyber;