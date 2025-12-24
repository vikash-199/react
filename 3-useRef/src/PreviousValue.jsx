import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function PreviousValue() {
  const [name, setName] = useState("");
  const preVal = useRef("");
  const [preName, setPreName] = useState("");

  useEffect(() => {
    setPreName(preVal.current);
    preVal.current = name;
  }, [name]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="title"
        placeholder="type here..."
      />
      <p>Current:{name}</p>
      <p>Previos namme:{preName}</p>
    </div>
  );
}

export default PreviousValue;
