
import './App.css';
import Birthday from './Components/Birthday';


function App() {
  const user = { 
    name: 'Moshe', 
    age: 18, 
  }
  return (
    <div className="App">
      <header className="App-header">
         <Birthday name = {user.name} age = {user.age}/>
         {/*{user.age > 18 ? <span>You are OK!</span> : <span>You are underaged!</span>}  אופציה אחרת*/}
      </header>
    </div>
  );
}

export default App;
