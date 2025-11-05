import React, { useState } from "react";
/*  // קומפוננטה פונקציה
function Welcome(props) {
  const [greeting, setGreeting] = useState(`Hello ${props.name}!`);
  return <div>{greeting}</div>;
}
*/

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greeting: `Hello ${props.name}!` };
  }
  render() {
    return <div>{this.state.greeting}</div>;
  }
}

export default Welcome;
