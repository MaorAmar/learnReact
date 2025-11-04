
import './App.css';
import Welcome from './Components/Welcome';
import myVars from './vars';

function App() {
  console.log(myVars)
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
      </header>
    </div>
  );
}

export default App;
