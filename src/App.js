import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button data-testid="minusBtn">-</button>
          <button data-testid="plusBtn">+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
