import {useState} from 'react'
import './App.css'
import LogoutBtn  from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  
    const[isLoggedIn,setLoggedIn] = useState(false);

     return (
      <div>
        {isLoggedIn ? <LogoutBtn/> : <LoginBtn />}
      </div>
     )
}

export default App
