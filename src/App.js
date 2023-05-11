import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import InfoMovie from './Components/InfoMovie'
import Error from './Components/Error'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<InfoMovie />} /> 
        <Route path='*' element={<Error />} />
        
       </Routes>
    </Router>
    
  )
}

export default App