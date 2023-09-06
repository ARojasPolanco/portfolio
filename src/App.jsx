import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import AboutMeInfo from './components/AboutMeInfo'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <main className='relative bg-bg-300 min-h-screen w-full overflow-hidden font-inter'>
      <div className='absolute left-0 blur-sm'>
        <img src="/images/hand-bg.png" alt="" />
      </div>
      <section className='max-w-[700px] mx-auto border-[1px] border-very-light-blue rounded-md p-2'>
        <section>
          <Header handleShowNavbar={handleShowNavbar} />
        </section>
        <section className={`absolute w-full top-0 ${showNavbar ? 'right-0' : '-right-full'} transition-all duration-300`}>
          <Navbar handleShowNavbar={handleShowNavbar} />
        </section>
        <section>
          <AboutMe />
        </section>
        <section >
          <AboutMeInfo />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact setShowModal={setShowModal} />
        </section>
        <section className='fixed -left-24 blur-[8px]'>
          <div>
            <img src="/images/hand-bg.png" alt="" />
          </div>
        </section>
        <section>
          <Modal setShowModal={setShowModal} showModal={showModal} />
        </section>
      </section>
    </main >
  )
}

export default App
