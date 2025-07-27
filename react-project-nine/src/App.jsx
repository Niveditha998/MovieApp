import './App.css'
import ChildA from './components/ChildA';
import { createContext, useState } from 'react';

//step1: create context
const UserContext = createContext();
//step2: Wrap all the child inside a provider
//step3: pass value
//step4: Go inside consumer and consume data
const ThemeContext = createContext();

function App() {
 
 const  [ theme,setTheme] = useState("light");
 const [user,setUser] = useState({name:"Love"})
  return (
    
  <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{theme,setTheme}}> 
     <div id = 'container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
       <ChildA />
     </div>
    </ThemeContext.Provider>
  
  </UserContext.Provider> 
    

  


  )
}

export default App
export {UserContext}
export {ThemeContext}