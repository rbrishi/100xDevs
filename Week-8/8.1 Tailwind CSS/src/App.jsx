import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "blue" }}>hi</div>
      </div>

      <div className="flex justify-between">
        <div className="bg-red-500">hello</div>
        <div className="bg-green-500">hello</div>
        <div className="bg-blue-500">hello</div>
        <div className="bg-yellow-500">hello</div>
      </div>
    </>
  );
}

export default App;
