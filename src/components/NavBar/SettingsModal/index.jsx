import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

const SettingsModal = () => {
    const {toggleTheme, theme, bgModal, openSettings, settings, bgColor, resetGame} = useContext(GameContext)


    return (
        <div className={`w-[20rem] h-32 rounded border border-black flex flex-col gap-2 absolute top-16 left-30 z-10 pl-4 ${bgColor}`}>
            Settings
            <div className="flex flex-row">
                <button className={"w-16 h-8 rounded flex items-center justify-center " + bgModal} onClick={() => resetGame()}>Reset</button>
            </div>
            
        </div>
    )
}

export default SettingsModal