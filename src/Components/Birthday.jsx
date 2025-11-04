import React from 'react';

function Birthday(props) {
  const {age , name} = props;
  const phrase = age <= 18 ? 'You are underaged!' : 'You are OK!'; 
  return (<span>Happy Birthday {name}! You are {age} years old! {phrase}</span>)
}

export default Birthday;