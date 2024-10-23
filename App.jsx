import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let heandleIncrement = () => {
    let newCountValue = count + 1
    setCount(newCountValue)
  }
  let handleDecrement =()=>{
    let newCountValue = count - 1
    setCount(newCountValue)
  }
  let reset =()=>{
    let newCountValue = 0
    setCount(newCountValue)
  }
  return (
    <>
      <div>
      
      <h2>{count}</h2>
      <button onClick={heandleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
    </>
  )
}

export default App
