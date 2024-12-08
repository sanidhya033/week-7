import { useContext } from "react"
import { CountContext } from "./context";
import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// now we dont need a state if we are using recoil
function App() {
  //const [count, setCount] = useState(0);
  // we need to wrap everything inside the recoil root 
  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
     </div>
  )
}
// any thing that uses recoil logic need to be wrapped
function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons   />
  </div>
}
// now we have acces of count value without passing it into Count function const [count, setCount] = useState(0); int this arrray 
function CountRenderer() {
  const count = useRecoilValue(countAtom);// use reoil value is like count in 
  return <div>
    {count}
  </div>
}
// we know 
// setcount(count+1);
// setcount(c => c+1);
// setcount(function(c){
//      return c+1; 
 // })

 // all three gives same thing 
 // using 2nd and 3rd we dont need count so nee need to re render buttons 

function Buttons() {
 // const [count, setCount] = useRecoilState(countAtom);
 const setCount = useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count =>count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count =>count - 1)
    }}>Decrease</button>
  </div>
}

export default App
