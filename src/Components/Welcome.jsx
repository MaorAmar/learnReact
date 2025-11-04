import React from 'react';

function WelCome(props) {
  const { prefix, name }  = props.user;
  return(<span>Hello, {prefix} {name}</span>) 
}
export default WelCome;