
import './App.css';
import TodayTime from './Components/TodayTime';


function App() {
  //ans 2
  const numbers = [];
  for (let i = 10; i > 0; i--){
    numbers.push(i);
  }
  const addNumbers = numbers.map((number,index)=>
    <li key = {index}>{number}</li>
  );
  //and 3
  const user = { 
    name: 'Maor', 
    lastName: 'Amar', 
    city: 'Ramat Gan', 
    id: '666', 
  }
  
  const users = Object.keys(user).map((val, index) => (
    <span key={index}>{val} : {user[val]} </span>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <TodayTime />
        <ul>{addNumbers}</ul>
        <ul>{users}</ul>
      </header>
    </div>
  );
}

export default App;
