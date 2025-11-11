import React, {useContext} from 'react';
import UserContext from '../UserContext';

function CityName() {
  const user = useContext(UserContext).data;

  return (
    <div>
      <span>You are from {user.city} </span>
    </div>
  )
}

export default CityName;