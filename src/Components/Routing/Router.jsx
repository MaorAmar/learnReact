import React, { useState, useEffect } from 'react';
import Home from './Home';
import NiceImage from './NiceImage';

function Router() {
  const [route,setRoute] = useState(window.location.hash.substr(1));
  useEffect(()=>{
    window.addEventListener('hashchange', () =>{
      setRoute(window.location.hash.substr(1));
    })
  },[]);

  let Child;

  function getChild() {
    switch(route){
      case '/image': Child = NiceImage;
      break;
      default: Child = Home;
    }
  }
  return (
    <div>
      {getChild()}
      <h1>App</h1>
      <ul>
        <li><a href="#/image">NiceImage</a></li>
        <li><a href="#/home">Home</a></li>
      </ul>
      <Child/>
    </div>
  )
}

export default Router;