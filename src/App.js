import "./App.css";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const handleIncrement = () => {
    setNum(num + 1);
  };
  const handleDecrement = () => {
    setNum(num - 1);
  };
  const handleReset = () => {
    setNum(0);
  };
  return (
    <div className="App">
      <h1>COUNTER</h1>
      <h2>{num}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
