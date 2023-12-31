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

  const btnGoToUp = () => {
    const buttonUp = document.querySelector('.bxs-up-arrow-alt')
    buttonUp.addEventListener('click', () => window.scrollTo(0, 0))
  }


  return (
    <main className='relative min-h-screen w-full overflow-hidden font-inter bg-[url(/images/bg-image.jpg)] bg-cover bg-right-top'>
      <section className='max-w-[700px] mx-auto border-[1px] border-very-light-blue rounded-md'>
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
      <div className="text-very-light-blue bg-light-gray rounded-full h-10 aspect-square flex justify-center items-center border-[2px] border-very-light-blue fixed bottom-4 right-4 cursor-pointer text-2xl" onClick={btnGoToUp}>
        <i className='bx bxs-up-arrow-alt'></i>
      </div>
    </main >
  )
}

export default App
