import React, { useState } from 'react'; 
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField'; 

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
        <TextField onChange={changeHandler}/> 
        <Button onClick = {changHandler}>Click me</Button>
    </div> 
  ); 
} 
export default InputViewer; 