import React, { useReducer, useState } from 'react'




const initialState = 0;
const reducer = (state,action)=>{
    console.log(state,action)   
    if(action.type === "Add"){
        return state + 1;
    } else if(action.type === "Substract"){
        return state - 1;
    }
    return state
}

function UseReducerHook() {
    // const [Count , setCount] = useState(0)

    // const actionFunctionAdd = () =>{
    //     setCount(Count + 1)
    // }

    // const actionFunctionLess = () =>{
    //     setCount(Count - 1)
    // }

    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>This is a useReducer hook</h1>
      <p></p>
      {/* <h2>Counter : {Count}</h2>
      <button onClick={()=>actionFunctionAdd()}>Click to Add</button><br />
      <button onClick={()=>actionFunctionLess()}>Click to Substract</button> */}

      <h2>Counter : {state}</h2>
      <button onClick={()=>dispatch({type : "Add"})}>Click to Add</button>
      <button onClick={()=>dispatch({type : "Substract"})}>Click to Substract</button>
    </div>
  )
}

export default UseReducerHook
