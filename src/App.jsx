import { useState, useContext } from 'react'
import { GameContext } from './context/GameContext'

import View from './components/Pages'
import NavBar from './components/NavBar'


function App() {
  const {bgColor, textColor} = useContext(GameContext)

  return (
    <div className={`pb-10 min-w-screen min-h-screen flex flex-col gap-8 items-center pt-6 lg:pt-12 ${bgColor} ${textColor}`}>
      <NavBar></NavBar>
      <View></View>
    </div>
  )
}

export default App
