
import './App.css';
import CountUp from './Components/CountUp';
import CountButton from './Components/CountButton';
import CountDown from './Components/CountDown';
import TodayTime from './Components/TodayTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <CountUp />
         <CountButton />
         <CountDown count={10} />
          <TodayTime /> 
      </header>
    </div>
  );
}

export default App;
