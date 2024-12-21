import { AboutUs, Contact, Home, Instructions, VendingMachine } from './Pages'
import { Footer, Nav } from './Components'
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
      <Footer/>
    </>
  )
}

export default App