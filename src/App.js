import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>github actions</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count-1)}>dec</button>
      <button onClick={()=>setCount(count+1)}>inc</button>
    </div>
  );
}

export default App;
