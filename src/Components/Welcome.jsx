import React from 'react';

function WelCome(props) {
  const [greeting, setGreeting] = useState(`Hello ${props.name}!`); 
  
  return(
    <div>{greeting}</div>) 
}
export default WelCome;