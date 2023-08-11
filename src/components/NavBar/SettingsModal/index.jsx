import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

const SettingsModal = () => {
    const {toggleTheme, theme, bgModal, bgColor, resetGame} = useContext(GameContext)


    return (
        <div className={`w-[18rem] h-56 lg:w-[20rem] lg:h-32 rounded-xl border border-black flex flex-col gap-2 absolute top-28  z-10 pl-4 ${bgColor}`}>
            Settings
            <div className="flex flex-row">
                <button className={`w-16 h-8 rounded-xl flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => resetGame()}>Reset</button>
            </div>
        </div>
    )
}

export default SettingsModal