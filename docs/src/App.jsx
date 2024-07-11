

import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'


function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
     {/*background of the screen which contains the name of the project
     background so it cannot be selected and wont interfere with thy project*/} 
     <Background />
     {/* Practically everything */}
     <Foreground />
     
      </div>
  )
}

export default App

