import React, { useState } from 'react'

function UseStateHook() {
    const [name,setName] = useState("Rohit")
  return (
    <div>
      <h1>useState Hook</h1>
        <h3>My Name is : {name}</h3>
        <input type="text" placeholder='Change Digit' onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default UseStateHook
