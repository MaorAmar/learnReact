import React, { useContext } from "react";
import UserContext from '../UserContext'
import Button from '@mui/material/Button'; 

function Welcome() {
  const user = useContext(UserContext).data;
  const changeUser = useContext(UserContext).changeUser;
  
  const newUser = {
    name: 'Moshe',
    surName: 'Cohen',
    city: 'Bat-yam'
  }
  function clickHandler(){
    changeUser(newUser);
  }

  return (
    <div>
      <span> Hello, {user.name} {user.surName}!</span>
      <Button variant='contained' color = "primary" onClick = {clickHandler}>Load another user</Button>
    </div>
  )
}


export default Welcome
/*
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greeting: `Hello ${props.name}!` };
  }
  render() {
    return <div>{this.state.greeting}</div>;
  }
}

export default Welcome;
*/