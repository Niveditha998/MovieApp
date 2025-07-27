import './App.css'
import Card from './components/card'
import Button from './components/Button'
import {useState} from 'react'

function App() {
    const [count,setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }
  return (
    <div>
         <Button handleClick = {handleClick} 
         text = "click me">
         <h1>{count}</h1>
         </Button>

     { /*<Card name="Niveditha Ayela">
         <h1>Best Web Development</h1>
         <p>Trying to be consistent in this</p>
         <p>Will complete the course soon</p>
      </Card>
      <Card children="These are my children">
        Hello, Welcome to my world.
      </Card>*/ }

    </div>
  );
}

export default App
