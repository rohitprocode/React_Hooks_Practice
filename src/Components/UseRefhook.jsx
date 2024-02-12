import React, { useRef, useState } from 'react'

function UseRefhook() {
    // const inputRef = useRef(null);
    const [Count,setCount] = useState(5)
    let inputRef = useRef(null)
    const InputFunc = () =>{
        console.warn("Button Clicked")
        inputRef.current.value = '1000'
        inputRef.current.focus();
        inputRef.current.style.color = 'red'
    }

    const Counter = () =>{
        setCount(Count + 5)
        console.log("State Updated")
    }
  return (
    <div>
      <h1>useRef Hook</h1>
      <p>useRef is a react hook which is used to update the dom element of the component without rendering the component of react.</p>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={InputFunc} >Click Here</button>
      <button onClick={Counter} >Counter Button</button>
    </div>
  )
}

export default UseRefhook
