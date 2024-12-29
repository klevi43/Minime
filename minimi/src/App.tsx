import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Nav from "./components/Nav/Nav"
function App() {
  const [count, setCount] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavBar = () => {
    setIsNavOpen(!isNavOpen);
}
  return (
    <>
      
      <div>
        <Nav isNavOpen={isNavOpen} toggleNavBar={toggleNavBar}></Nav>
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
