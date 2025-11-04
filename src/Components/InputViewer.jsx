import React, { useState } from 'react'; 
import Input from './Input';
import Button from './Button';
function InputViewer() { 
  const [text, setText] = useState('');
  const [viewText, setViewText] = useState('');
  
  function changeHandler(e) { 
    setText(e.target.value); 
  };

  function changHandler(e){
    setViewText(text);
  }

  return ( 
    <div> 
        <span>{viewText}</span> 
        <Input onChange={changeHandler} type="text" /> 
        <Button onClick = {changHandler}>Click me</Button>
    </div> 
  ); 
} 
export default InputViewer; 