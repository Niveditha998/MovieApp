import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const[count,setCount] = useState(0);
 const[total,setTotal] = useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma seperated dep list

  //variation:1
  //runs on every render

  //  useEffect(() => {
      
  //    alert("I will run on each render")
  //  })
   

  //variation:2
  // that runs on only first render

 // useEffect(() => {
   //   alert("I will run on only 1st render");
  //},[])

  // variation: 3
  //  useEffect(() => {
  //    alert("I will run every time when count is updated")
  //  },[count])
     
  // variation: 4
  //multiple dependencies

  // variation: 5
  //iss baarlet's add a cleanup function

 { /*useEffect(() => {
    alert("Count is updated")
    return () => {
    alert("Count is unmounted from UI")
    }
  }, [count])
  

  useEffect(() => {
      alert("I will run everytime when count/total is updated")
  }, [count,total])
  
    function handleClick(){
      setCount(count+1);
      setCount(total+1);
    }

    function handleClickTotal(){
      setCount(total+1);
    } */}

  return (
    <div>
        {/* <button onClick={handleClick}>
            update Count
         </button>
         <br/>

         <button onClick={handleClickTotal}>
            update Total
         </button>
        <br/>
        Total is : {total} */}

        <TimerComponent />
    </div>
  )
}

export default App
