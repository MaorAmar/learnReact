import React from "react";
class BrokenComponent extends React.Component {
  render() {
    throw new Error("I crashed!");
    return null;
  }
}
export default BrokenComponent;
