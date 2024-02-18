import React from 'react'

function UseMemoHook() {    

    const MultiplyFunc = () =>{
        const x = parseFloat(document.getElementById('FirstInput').value);
        const y = parseFloat(document.getElementById('SecondInput').value);
        const result = x * y;
        document.getElementById('result').innerText = `Result: ${result}`;
    }

  return (                                                 
    <div>
      <h1>This is a useMemo Hook</h1>
      <p><strong>useMemo</strong> is a react hook that memoizes a value and returns the same value until any of the dependencies in the dependency array changes,until then it will recompute a new value.</p>
      <input type="text" placeholder='Enter First Number' id='FirstInput'/><br />
      <input type="text" placeholder='Enter Second Number' id='SecondInput'/><br />
      <button onClick={MultiplyFunc} >Multiply</button>
      <h2 id='result' >Your Output result will reflect here:</h2>
    </div>
  )
}

export default UseMemoHook
