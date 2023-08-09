import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../context/GameContext"
import {BsMoonFill} from 'react-icons/bs'
import {BiSolidSun} from 'react-icons/bi'
import {IoMdSettings} from 'react-icons/io'
import SettingsModal from "./SettingsModal"

const NavBar = () => {
    const {toggleTheme, theme, bgModal, openSettings, settings, bgColor} = useContext(GameContext)
    const [icon, setIcon] = useState(<BiSolidSun />)

    useEffect(() => {
        setIcon(theme == 'light' ? <BsMoonFill /> : <BiSolidSun />)
    }, [theme] )

    return (
        <div className="flex gap-2 w-[80%]">
            <button className={"w-12 h-8 rounded flex items-center justify-center " + bgModal} onClick={() => toggleTheme()}>{icon}</button>
            <button className={"w-12 h-8 rounded flex items-center justify-center " + bgModal} onClick={() => openSettings()}><IoMdSettings /></button>
            {settings ? <SettingsModal /> : null}
        </div>
    )
}

export default NavBar