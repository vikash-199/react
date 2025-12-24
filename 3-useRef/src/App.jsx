import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i <= 1000000; i++) {
      sum += i;
    }
    return sum + count;
  }, [count]);
  return (
    <div>
      <h2>Result:{result}</h2>
      <button onClick={() => setCount(count + 1)}>Increse Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
