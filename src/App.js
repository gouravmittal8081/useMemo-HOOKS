import "./styles.css";
// import React, { useState } from "react";
import React, { useState, useMemo } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  let [item, setItem] = useState(10);

  // useMemo basically ham yha callbacks function use kr rahe hai,
  let multiCountMemo = useMemo(
    function multiCount() {
      console.log("Multiple");
      return count * 5;
      // ye bs count ke liye hi use hoga,item ke liye nhi hoga
    },
    [count]
  );

  return (
    <div className="App">
      <h2>Item: {item}</h2>
      <h2>useMemo-HOOKS {count}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 10)}>Update item</button>
    </div>
  );
}
