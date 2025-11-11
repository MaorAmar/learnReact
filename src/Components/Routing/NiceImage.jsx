import React from 'react'; 
import {useParams} from 'react-router-dom'
function NiceImage() { 
  let {id} = useParams();
  
  let imgSrc = `https://picsum.photos/id/${id}/200/300`; 
  return ( 
    <img src={imgSrc} /> 
  ); 
} 
export default NiceImage;