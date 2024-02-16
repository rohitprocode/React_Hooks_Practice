import React, { useContext } from 'react'
import Component3 from './Component3'
import { FirstName, LastName,Age } from '../App'

function Component2() {
  const fName = useContext(FirstName)
  const lName = useContext(LastName)
  const age = useContext(Age)
  return (
    <div style={{backgroundColor:'blue',padding:'20px'}}>
      <h1>This is Component 2</h1>
      <h3>My Name is {fName} {lName} : {age} </h3>
      <Component3/>
    </div>
  )
}

export default Component2
