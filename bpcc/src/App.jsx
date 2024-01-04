import React from "react";
import ReactDOM  from "react";

function App() {
  let a = 2;
  let b = 3;
  let c;

  c = a + b;
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500 mt-8">
        La suma de {a} y {b} es: {c}
      </h1>
    </>
  );
}

export default App;