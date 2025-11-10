import React, { useState, useEffect } from 'react';
import Home from './Home';
import Help from './Help';
import About from './About';

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
      case '/about': Child = About;
      break;
      case'/help': Child = Help;
      break;
      default: Child = Home;
    }
  }
  return (
    <div>
      {getChild()}
      <h1>App</h1>
      <ul>
        <li><a href="#/about">About</a></li>
        <li><a href="#/help">Help</a></li>
        <li><a href="#/home">Home</a></li>
      </ul>
      <Child/>
    </div>
  )
}

export default Router;