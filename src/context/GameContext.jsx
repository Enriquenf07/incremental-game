import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

createContext
useLocalStorage

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const [bgColor, setBgColor] = useLocalStorage( 'bg-color', 'bg-zinc-100')
    const [bgModal, setBgModal] = useLocalStorage( 'bg-modal', 'bg-zinc-300')
    const [textColor, setTextColor] = useLocalStorage('text-color', 'text-zinc-800')
    const [settings, setSettings] = useLocalStorage('settings', false)

    const [str, setStr] = useLocalStorage('str', 0)
    const [strFlag, setStrFlag] = useLocalStorage('strFlag', false)
    const [dex, setDex] = useLocalStorage('dex', 0)
    const [dexFlag, setDexFlag] = useLocalStorage('dexFlag', false)
    const [int, setInt] = useLocalStorage('int', 0)
    const [intFlag, setIntFlag] = useLocalStorage('intFlag', false)

    const toggleTheme = () => {
        if (theme == 'light') {
            setTheme('dark')
            setBgColor('bg-zinc-900')
            setTextColor('text-zinc-100')
            setBgModal('bg-zinc-800')
            return
        }
        setTheme('light')
        setBgColor('bg-zinc-100')
        setTextColor('text-zinc-800')
        setBgModal('bg-zinc-300')
    } 

    const openSettings = () => {
        setSettings(settings ? false : true)
    }

    const resetGame = () => {
        setStr(0)
        setDex(0)
        setInt(0)
        setStrFlag(false)
        setDexFlag(false)
        setIntFlag(false)
    }

    const activeStr = () => {
        setStrFlag(true)
        setDexFlag(false)
        setIntFlag(false)
    }

    const activeDex = () => {
        setStrFlag(false)
        setDexFlag(true)
        setIntFlag(false)
    }

    const activeInt = () => {
        setStrFlag(false)
        setDexFlag(false)
        setIntFlag(true)
    }

    useEffect(() => {
     const timer = setInterval(() => {
        if (strFlag) {
            setStr((prev) => prev + 1)
        }
        if (dexFlag) {
            setDex((prev) => prev + 1)
        }
        if (intFlag) {
            setInt((prev) => prev + 1)
        }
     }, 1000)
     
     return () => clearTimeout(timer)
    })

    return (
    <GameContext.Provider value={{theme, toggleTheme, settings, openSettings, bgColor, bgModal, textColor, str, dex, int, resetGame, activeStr, strFlag, activeDex, dexFlag, activeInt, intFlag}}>
        {children}
    </GameContext.Provider>
    )
}