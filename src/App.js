import logo from './logo.svg';
import './App.css';
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';

function App() {
  return (
    <div className="App">
      <h1>Practice of Hooks</h1>
      {/* <UseStateHook/> */}
      <UseEffectHook/>
    </div>
  );
}

export default App;
