import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Landing page
      <div>
      nav bar
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        cards about classes
      </div>
      
        
    </>
  )
}

export default App
