import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleTask(e) {
    e.preventDefault();
    if (input !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  }
  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        name="task"
        value={input}
        placeholder="Enter task name"
        onChange={handleChange}
      />
      <button onClick={handleTask}>create Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
