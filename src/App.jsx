import { useState, useContext } from 'react'
import { GameContext } from './context/GameContext'

import View from './components/Pages'
import NavBar from './components/NavBar'


function App() {
  const {bgColor, textColor} = useContext(GameContext)

  return (
    <div className={`w-screen min-h-screen flex flex-col gap-4 items-center pt-4 ${bgColor} ${textColor}`}>
      <NavBar></NavBar>
      <View></View>
    </div>
  )
}

export default App
