import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    //updates the button by 2 when the botton is clicked
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
