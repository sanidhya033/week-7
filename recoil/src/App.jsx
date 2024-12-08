import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

// Now we don't need a state if we are using Recoil
function App() {
  // const [count, setCount] = useState(0);
  // We need to wrap everything inside the RecoilRoot
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

// Any component that uses Recoil logic needs to be wrapped
function Count() {
  console.log("Count component re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

// Now we have access to the count value without passing it into the Count function
// e.g., const [count, setCount] = useState(0); is no longer required
function CountRenderer() {
  const count = useRecoilValue(countAtom); // useRecoilValue is like `count` in useState
  return (
    <div>
      <b>{count}</b>
      <EvenCountRendered />
    </div>
  );
}

function EvenCountRendered() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It's Even" : null}</div>;
}

// We know:
// setCount(count + 1);
// setCount(c => c + 1);
// setCount(function (c) { return c + 1; });
// All three achieve the same thing.
// Using the 2nd and 3rd options, we don't need to access the current `count` value directly,
// so there's no need to re-render Buttons.
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom); // Not needed here
  const setCount = useSetRecoilState(countAtom); // Using useSetRecoilState avoids unnecessary re-renders
  console.log("Buttons component re-rendered");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
