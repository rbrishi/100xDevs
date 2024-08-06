import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* raw css */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "blue" }}>hi</div>
      </div>
      {/* Tailwind CSS */}
      <div className="flex justify-between">
        <div className="bg-red-500">hello</div>
        <div className="bg-green-500">hello</div>
        <div className="bg-blue-500">hello</div>
        <div className="bg-yellow-500">hello</div>
      </div>
      <br></br>
      <div className="grid grid-cols-4">
        <div className="bg-red-500">hello</div>
        <div className="bg-green-500">hello</div>
        <div className="bg-blue-500">hello</div>
        <div className="bg-yellow-500">hello</div>
      </div>

      <div className="bg-orange-500  md:bg-blue-500">Hi is media</div>
    </>
  ); 
}

export default App;
