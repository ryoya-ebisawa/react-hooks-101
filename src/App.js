import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const increment2 = () => setCount((previousCount) => previousCount + 1);
  const decrement2 = () => setCount((previousCount) => previousCount - 1);

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => setCount((previousCount) => (previousCount = 0));

  const double = () => setCount((previousCount) => previousCount * 2);

  const divide = () => {
    if (count % 3 === 0) {
      setCount(count / 3);
    } else {
      return;
    }
  };

  return (
    <>
      <div> count: {count}</div>
      <button onClick={increment}>+ 1</button>
      <button onClick={decrement}>- 1</button>
      <div>
        <button onClick={increment2}>+ 1</button>
        <button onClick={decrement2}>- 1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
        <button onClick={divide}>３の倍数の時だけ３で割る</button>
      </div>
    </>
  );
};

export default App;
