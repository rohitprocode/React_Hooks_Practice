import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [Count, setCount] = useState(0);
  const [Count2,setCount2] = useState(10)

  const UpdateCount = () =>{
    setCount(Count + 1)
    setCount2(Count2 + 10)
  }

  useEffect(()=>{
    console.log("useEffect Called")
    return ()=>{console.log("useEffect Unmounted")}
  },[Count2])

  return (
    <div>
      <h1>
        useEffect Hook allows you to perform side effects in your component.
      </h1>
      <p>
        Example of side effects are: fetching Data, directly updating the DOM
        and timers.
      </p>
      <p>useeffect use two arguments , the second argument is optional</p>

      <h1>This is a Example of useEffect hook : {Count}</h1>
      <input type="text" placeholder="Enter some code" onChange={UpdateCount}/>
      <br />
      <h1>Second Example : {Count2}</h1>
      <button onClick={UpdateCount} >Click</button>
    </div>
  );
}

export default UseEffectHook;
