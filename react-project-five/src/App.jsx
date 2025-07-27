import './App.css'
import Card from './components/Card'

function App() {
//create,manage,change,merge all child into state

const [name, setName] = useState('');

return (
    <div>
     <Card name={name}  setName={setName}/>
    </div>
  )
}

export default App
