
import './App.css';
import CountUp from './Components/CountUp';
import CountButton from './Components/CountButton';
import CountDown from './Components/CountDown';
import TodayTime from './Components/TodayTime';
import InputViewer from './Components/InputViewer';
import MyDivContainer from './Components/MyDivContainer'; 
import Counter from './Components/Counter';
import TableRow from './Components/TableRow';
import CountViewer from './Components/CountViewer';
import CounterSec from './Components/counter/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountUp />
        <CountButton />
        <CountDown count={10} />
        <TodayTime /> 
        <InputViewer />
        <MyDivContainer />
        <Counter/>
        <TableRow />
        <CountViewer count={11} />
      </header>
    </div>
  );
}

export default App;
