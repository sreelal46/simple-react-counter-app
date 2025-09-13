import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>
      {count > 0 ? (
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      ) : (
        <button disabled>Decrease</button>
      )}
      {count > 0 ? (
        <button onClick={() => setCount((count = 0))}>Reset</button>
      ) : (
        <button disabled>Reset</button>
      )}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
