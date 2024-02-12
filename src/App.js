import logo from './logo.svg';
import './App.css';
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefhook from './Components/UseRefhook';

function App() {
  return (
    <div className="App">
      <h1>Practice of Hooks</h1>
      <hr />
      {/* <UseStateHook/> */}
      <br />
      <hr />
      {/* <UseEffectHook/> */}
      <br />
      <hr />
      <UseRefhook/>
    </div>
  );
}

export default App;
