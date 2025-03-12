import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ChildComponent count={count} />
//     </div>
//   );
// }

// export default App;




function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Compteur: {count} </h1>
      <p id="counter">Nombre de Click: {count}</p>
      <button id="btn" onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button id="negative" onClick={() => setCount(count - 1)}>Décrémenter</button>
      <button id="reset" onClick={() => setCount(0)}>Réinitialiser</button>
      <ChildComponent count={count} />
    </div>
  );
}

export default App;
