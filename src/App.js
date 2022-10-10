
import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(4)

  const handleDecrease = (prevCount) => {
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
    // console.log('prevCount', prevCount)
  }

  const handleIncrease = (prevCount) => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    // console.log('prevCount', prevCount)
  }

  return (
    <div className="App">
      <button onClick={handleDecrease}> - </button>
      <h1> {count} </h1>
      <button onClick={handleIncrease}> + </button>
    </div>
  );
}

export default App;
