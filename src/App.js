
import './App.css';
import CountUp from './Components/CountUp';
import CountButton from './Components/CountButton';
import CountDown from './Components/CountDown';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <CountUp />
         <CountButton />
         <CountDown count={10} />
      </header>
    </div>
  );
}

export default App;
