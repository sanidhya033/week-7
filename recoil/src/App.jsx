import { useContext } from "react"
import { CountContext } from "./context";
import { countAtom } from "./store/atoms/count";
// now we dont need a state if we are using recoil
function App() {
  //const [count, setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside a provider
  // we use contextapi to make syntax cleaner/get rid of propdrilling
  // context api has some unecessary re renders that is solved by state management using recoil 
  
  return (
    <div>
 
      <Count />

    
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons   />
  </div>
}
// now we have acces of count value without passing it into Count function 
function CountRenderer() {
  const count = 0;
  return <div>
    {count}
  </div>
}

function Buttons() {
  const count = 0;
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App