import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <main className='routes'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
