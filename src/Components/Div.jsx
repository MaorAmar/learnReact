import React, { useState } from 'react'; 
function Div(props) { 
  let onText = props.onMouseOver; 
  let outText = props.onMouseOut; 
  return ( 
    <div 
      onMouseOver={onText} 
      onMouseOut={outText} 
    > 
      My div 
    </div> 
  ); 
} 
export default Div; 