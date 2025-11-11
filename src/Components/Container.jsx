import React, {useState} from 'react';
import {UserProvider} from '../UserContext';
import Welcome from './Welcome';
import CityName from './CityName'

function Container() {
  const [user,setUser] = useState({
    name: 'Ran',
    surName: 'Bar-Zik',
    city: 'Petah-Tiqwa'
  })

  const providerOptions = {
    data: user,
    changeUser:(value) => setUser(value),
  }

  return (
    <div>
      <UserProvider value={providerOptions}>
        <Welcome />
        <CityName />
      </UserProvider>
    </div>
  )
}
export default Container;