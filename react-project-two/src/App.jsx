import UserCard from "./components/UserCard"
import cmich from "../assets/cmich.svg"
import car from "../assets/car.jpg"
import mou from "../assets/mou.jpg"

function App() {

  return (
    <div className = "Container">
      <UserCard name="Niveditha Ayela" desc="desc1" image={cmich} />
      <UserCard name="CMU" desc ="desc2" image= {car}/>
      <UserCard name="Masters Degree" desc = {mou}/>
    </div>
  )
}

export default App
