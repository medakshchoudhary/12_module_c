import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Impact from './components/Impact'

const App = () => {
  return (
    <div className='w-full text-white'>
      <Navbar />
      <LandingPage/>
      <Impact />
    </div>
  )
}

export default App