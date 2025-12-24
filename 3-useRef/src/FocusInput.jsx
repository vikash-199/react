import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="type here..." />
      <button onClick={handleInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
