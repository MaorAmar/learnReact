import "./App.css";
import Welcome from "./Components/Welcome";
import CountUp from "./Components/CountUp";
import CountButton from "./Components/CountButton";
import CountDown from "./Components/CountDown";
import TodayTime from "./Components/TodayTime";
import InputViewer from "./Components/InputViewer";
import MyDivContainer from "./Components/MyDivContainer";
import Counter from "./Components/Counter";
import TableRow from "./Components/TableRow";
import CountViewer from "./Components/CountViewer";
import CounterSec from "./Components/counter/Counter";
import ErrorBoundary from "./Components/ErrorBoundary";
import BrokenComponent from "./Components/BrokenComponent";
import CountUpClick from "./Components/CountUpClick";
import Cyber from "./Components/Cyber";
import TableViewer from "./Components/TableViewer";
import CardsGrid from "./Components/CardsGrid";
import MyContainer from './Components/MyContainer'
import MyRouter from './Components/Routing/MyRouter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CountButton />
        <InputViewer />
        <Counter />
        <CounterSec />
        <TodayTime />
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
        <CountUpClick />
        <Cyber />
        <TableViewer/>
        <CardsGrid/>
        <MyContainer /> */}
        <MyRouter />
      </header>
    </div>
  );
}

export default App;
