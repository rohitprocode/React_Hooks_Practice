import React, { useState } from 'react'

function UseStateHook() {
    const [name,setName] = useState("Rohit")
    const [car,setCar] = useState({
        make : 'Toyota ',
        model : '2pdeus ',
        year : '2024',
        color : 'silver '
    })

    const updateData = () =>{
        setCar(previousData =>{
            return {...previousData , color : 'Blue '}
        })
    }
    
  return (
    <div>
      <h1>useState Hook</h1>
      <p>The React useState Hook allow us to track state in function component.</p>
        <h3>My Name is : {name}</h3>
        <input type="text" placeholder='Change Digit' onChange={(e)=>setName(e.target.value)} />
        <h2>I have a {car.color} {car.make} {car.model} from {car.year} car</h2>
        <button type='button' onClick={updateData}>Click to Change</button>
    </div>
  )
}

export default UseStateHook
