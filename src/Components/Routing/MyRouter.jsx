import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import NiceImage from './NiceImage';

function MyRouter() {
  return (
    <Router>
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/image/1'>NiceImage</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image/:id" element={<NiceImage />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default MyRouter;