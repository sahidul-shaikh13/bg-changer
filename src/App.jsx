import { useState } from "react";


function App() {
  let [color, setColor] = useState("");


  return (
    <>
      <div className="w-screen h-screen duration-200" style={{ background: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-y-1000 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{ background: "red" }}
            onClick={ ()=>setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{ background: "green" }}onClick={ ()=>setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{ background: "yellow" }}onClick={ ()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{ background: "pink" }}onClick={ ()=>setColor("pink")}>Pink</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App;
