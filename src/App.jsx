import { AboutUs, Contact, Home, Instructions, VendingMachine } from './Pages'
import { Nav } from './Components'
import {  Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Nav/>
      <Routes> 
       <Route path="/" element={<Home />} /> 
       <Route path="/aboutus" element={<AboutUs />}/>
       <Route path="/contact" element={<Contact />}/>
       <Route path="/instructions" element={<Instructions />}/>
       <Route path="/vending" element={<VendingMachine />}/>
      </Routes> 
    </>
  )
}

export default App