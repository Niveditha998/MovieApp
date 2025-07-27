import { useState,useEffect } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let val= useRef(0);
  function handleIncrement(){
    val.current = val.current+1;
    console.log("Value of val:",val.current);
    setCount(count+1);
  }

  // It runs on every render
useEffect(() => {
  console.log("I am effected")

})

  return (
    <div>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <br/>
      <div>
        Count: {count}
      </div>
    </div>
  )
}

export default App
