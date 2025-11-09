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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountUp />
        <CountButton />
        <CountDown count={10} />
        <InputViewer />
        <MyDivContainer />
        <Counter />
        <TableRow />
        <CountViewer count={11} />
        <CounterSec />
        <Welcome name="Maor" />
        <TodayTime />
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
        <CountUpClick />
        <Cyber />
        <TableViewer/>
        <CardsGrid/>
      </header>
    </div>
  );
}

export default App;
