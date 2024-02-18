import React, { createContext } from 'react';
import './App.css';
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefhook from './Components/UseRefhook';
import Component1 from './Components/Component1';
import UseReducerHook from './Components/UseReducerHook';
import UseMemoHook from './Components/UseMemoHook';
 
const FirstName = createContext()
const LastName = createContext()
const Age = createContext()

function App() {
  return (
    <div className="App">
      <h1>Practice of Hooks</h1>
      <hr />
      {/* <UseStateHook/>
      <br />
      <hr />
      <UseEffectHook/>
      <br />
      <hr />
      <UseRefhook/>
      <FirstName.Provider value={"Rohit "} >
        <LastName.Provider value={"Rathore "}>
          <Age.Provider value={"23 Years"}>
      <Component1/>
      </Age.Provider>
      </LastName.Provider>
      </FirstName.Provider>
      <br />
      <hr />
      <UseReducerHook/> */}
      <br />
      <hr />
      <UseMemoHook/>
    </div>
  );
}

export default App;
export {FirstName,LastName,Age}