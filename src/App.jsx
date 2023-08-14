import { useState, useContext } from 'react'
import { GameContext } from './context/GameContext'

import View from './components/Pages'
import NavBar from './components/NavBar'
import { classes } from './helper/Prestige'
import ChangeName from './components/Pages/Build/ChangeName'
import ChangeBuild from './components/Pages/Build/ChangeBuild'



function App() {
  const {bgColor, textColor, name, build} = useContext(GameContext)

  if (name == '') {
    return (
    <div className={`pb-10 min-w-screen min-h-screen flex flex-col gap-8 items-center pt-6 lg:pt-12 ${bgColor} ${textColor}`}>
      <ChangeName />
      
    </div>
    )
  }

  if (build == 0) {
    return(
    <div className={`pb-10 min-w-screen min-h-screen flex flex-col gap-8 items-center pt-6 lg:pt-12 ${bgColor} ${textColor}`}>
      <ChangeBuild />
    </div>
    )
  }

  return (
    <div className={`pb-10 min-w-screen min-h-screen flex flex-col gap-8 items-center pt-6 lg:pt-12 ${bgColor} ${textColor}`}>
      <NavBar></NavBar>
      <View />
    </div>
  )
}

export default App
