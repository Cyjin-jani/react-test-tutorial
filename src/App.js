import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minusBtn"
            onClick={() => setCounter((prev) => prev - 1)}
            disabled={isDisabled}
          >
            -
          </button>
          <button
            data-testid="plusBtn"
            onClick={() => setCounter((prev) => prev + 1)}
            disabled={isDisabled}
          >
            +
          </button>
        </div>
        <br />
        <div>
          <button
            data-testid="onOffBtn"
            style={{ backgroundColor: 'blue' }}
            onClick={handleDisable}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
