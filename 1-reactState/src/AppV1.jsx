import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleInc(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  function handleDec(e) {
    e.preventDefault();
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
