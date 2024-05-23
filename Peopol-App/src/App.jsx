import { useState } from 'react'
import reactLogo from './assets/react.svg'
import peopolLogo from '/peopol.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={peopolLogo} className="logo" alt="Vite logo" />
        </a>
      
      </div>
      <h1 >Welcome To Peopol App</h1>
    
      <p className="read-the-docs">
          We are still under construction. Keep Posted!!!
      </p>
    </>
  )
}

export default App
