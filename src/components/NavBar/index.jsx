import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../context/GameContext"
import {BsMoonFill} from 'react-icons/bs'
import {BiSolidSun} from 'react-icons/bi'
import {IoMdSettings} from 'react-icons/io'
import SettingsModal from "./SettingsModal"
import {BiSolidHelpCircle} from 'react-icons/bi'

const NavBar = () => {
    const {toggleTheme, theme, bgModal, openSettings, settings, bgColor, setView} = useContext(GameContext)
    const [icon, setIcon] = useState(<BiSolidSun />)

    useEffect(() => {
        setIcon(theme == 'light' ? <BsMoonFill /> : <BiSolidSun />)
    }, [theme] )



    return (
        <div className="flex flex-col gap-4 w-[80%]">
            <div className="flex gap-2 flex-wrap pl-3 lg:pl-0 ">
                <button className={`w-12 h-8 lg:w-14 lg:h-10 rounded-lg flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => toggleTheme()}>{icon}</button>
                <button className={`w-12 h-8 lg:w-14 lg:h-10 rounded-lg flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => setView(5)}><BiSolidHelpCircle /></button>
                <button className={`w-12 h-8 lg:w-14 lg:h-10 rounded-lg flex items-center justify-center lg:mr-2 mr-20 ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => openSettings()}><IoMdSettings /></button>
                {settings ? <SettingsModal /> : null}
                <button className={` h-10 w-32 lg:h-10 rounded-lg flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => setView(0)}>World</button>
                <button className={` h-10 w-32 lg:h-10 rounded-lg flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => setView(1)}>Upgrades</button>
                <button className={` h-10 w-32 lg:h-10 rounded-lg flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => setView(2)}>Shop</button>
                <button className={` h-10 w-32 lg:h-10 rounded-lg flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => setView(3)}>Boss</button>
                <button className={` h-10 w-32 lg:h-10 rounded-lg flex items-center justify-center ${theme == 'light' ? 'hover:bg-zinc-300' : 'hover:bg-zinc-700'} ` + bgModal} onClick={() => setView(4)}>Achievements</button>
            </div>
        </div>
    )
}

export default NavBar