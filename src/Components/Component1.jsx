import React from 'react'
import Component2 from './Component2'

function Component1() {
  return (
    <div  style={{backgroundColor:'red',padding:'20px'}}>
        <h1>I am Component1</h1>
        <h2>Context API</h2>
        <p><strong> Context API </strong> is a feature in React that allows you to share data between components without having to explicitly pass props through every level of the component tree.It provides a way to pass props down manually at every level.</p>
        <h2>useContextHook</h2>
        <p><strong>useContext </strong> is a React Hook that allows you to consume the context that has been created using the Context API.</p>
      <Component2/>
    </div>
  )
} 

export default Component1
