import logo from './logo.svg';
import './App.css';
import Counter from './componnents/Counter';
import CounterClass from './componnents/CounterClass';
import userData from './userData';
import User from './componnents/User'
import ShowMessage from './componnents/ShowMessage'
import Disable from './componnents/Disablebtn';
import Login from './login/Login';

function App() {
  return (
    <>
      {/* <Counter />
      <CounterClass />
      <User data={userData} />
      <ShowMessage />
      <Disable /> */}
      <Login />
    </>
  );
}

export default App;
