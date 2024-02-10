import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [Count, setCount] = useState(0);

  const UpdateCount = () =>{
    setCount(Count + 1)
  }

  useEffect(()=>{
    console.log("useEffect Called")
  })

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
    </div>
  );
}

export default UseEffectHook;
