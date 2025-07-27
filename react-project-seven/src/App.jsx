import './App.css'

function App() {
  
function handleClick(){
     alert("I am clicked");
}

function handleMouseOver() {
   alert(" Bring Mouse Over Para")
}

function handleInputChange(e){
  console.log("Input Value is changed: ",e.target.value);
}

function handleSubmit(e){
     e.preventDefault();
}
  return (
    <div>
    
    <button onClick= {() => {alert("But got clicked")} }>
           Click me
    </button>


   {/* <form onSubmit ={handleSubmit}>

      <input type = 'text' onChange={handleInputChange} />
      <button type='submit'>Submit</button>

    </form> */}

    </div>
  )
}

export default App
