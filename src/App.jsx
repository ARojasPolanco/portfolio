import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'

function App() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <main className='relative bg-bg-300 min-h-screen w-full overflow-hidden'>
      <Header handleShowNavbar={handleShowNavbar} />
      <section className={`absolute top-0 ${showNavbar ? 'right-0' : '-right-96'} transition-all duration-300`}>
        <Navbar handleShowNavbar={handleShowNavbar} />
      </section>
      <AboutMe />
    </main>
  )
}

export default App
