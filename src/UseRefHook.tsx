import { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Click the button to focus"
        ref={inputRef}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefHook;
