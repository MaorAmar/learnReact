import React, {useState} from 'react';
import Div from './Div';

function MyDivContainer() {
    
  const [onText, setOnText] = useState('');
  function mouseOnText(e){
    setOnText('active')
  }

  function mouseOutText(e){
    setOnText('');
  }
   return ( 
    <div> 
      <Div 
        onMouseOver={mouseOnText} 
        onMouseOut={mouseOutText} 
      > 
    </Div> 
    {onText} 
    </div> 
  );


}

export default MyDivContainer;