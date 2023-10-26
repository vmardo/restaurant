import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import BarraNavegacion from './components/BarraNavegacion'

function App() {

  return (
    <Router>

      <BarraNavegacion/>

      <Routes>
    
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/contacto' element={ <Contacto/>} />

      </Routes>


    </Router>
  )
}

export default App
