import React from 'react'
//importing component
import Navbar from './Components/Navbar'
//importing pages
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Certificate from './Pages/Certificate'
import Offerletter from './Pages/Offerletter'
import Payment from './Pages/Payment'

const App = () => {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/jobs":
      component = <Jobs />
      break;
    case "/payment":
      component = <Payment />
      break;
    case "/offerletter":
      component = <Offerletter />
      break;
    case "/certificate":
      component = <Certificate />
      break;

    default:
      break;
  } 
  return (
    <div>
      <Navbar />
      <div>{component}</div>
    </div>
  )
}


export default App
