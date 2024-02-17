// import React, { useReducer, useState } from 'react'

// const initialState = 0;
// const reducer = (state,action)=>{
//     console.log(state,action)
//     if(action.type === "Add"){
//         return state + 1;
//     } else if(action.type === "Substract"){
//         return state - 1;
//     }
//     return state
// }

// function UseReducerHook() {
//     const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <div>
//       <h1>This is a useReducer hook</h1>
//       <p></p>
//       <h2>Counter : {state}</h2>
//       <button onClick={()=>dispatch({type : "Add"})}>Click to Add</button>
//       <button onClick={()=>dispatch({type : "Substract"})}>Click to Substract</button>
//     </div>
//   )
// }

// export default UseReducerHook

import React, { useReducer, useState } from "react";
const initialCountervalue = 100;

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "Increment" :
      return state + 10
      break;
    case "Decrement" : 
    return state - 10
    break;
    case "Multiply" : 
    return state * 10
    break;
    case "Division" : 
    return state / 10
  }
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducerFunc, initialCountervalue);
  // const [Counter,setCounter] = useState(100)
  return (
    <div>
      <h1>Counter : {state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Click to 10+
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Click to -10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Multiply" });
        }}
      >
        Click to 10x
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Division" });
        }}
      >
        Click to /10
      </button>
    </div>
  );
}

export default UseReducerHook;
