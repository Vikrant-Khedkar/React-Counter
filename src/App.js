import React ,{useState} from 'react';
import "./App.css";


function App(){
  const [count, setCount] = useState(0);

  return(
    <div className='App'>
     <header> <h1>Counter App Using React States</h1></header>
     <h2>Current Value Of Count is {count}</h2>
     <button onClick={() => setCount(count + 1)}>Increase</button>
     <button onClick={() => (count <= 0 ? "": setCount( count - 1))}>Decrease</button>
     <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );

};

export default App;