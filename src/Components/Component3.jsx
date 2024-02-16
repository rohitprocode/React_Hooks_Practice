import React from 'react';
import { FirstName,LastName,Age } from '../App';


function Component3() {
  return (
    <div style={{backgroundColor:'green',padding:'20px'}}>
    <h1>This is Component 3</h1>
    <FirstName.Consumer>
      {(Fname) => {
        return (
          <>
          <LastName.Consumer>
          {(Lname)=>{
            return (
              <Age.Consumer>
                {(age)=>{
                  return <h1>My Name is {Fname} {Lname} {age}</h1>
                }}
                </Age.Consumer>
            )
          }}
          </LastName.Consumer>
          </>
        )
      }}
    </FirstName.Consumer>
    </div>
  );
}

export default Component3;
