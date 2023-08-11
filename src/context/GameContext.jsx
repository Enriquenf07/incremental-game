import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const [bgColor, setBgColor] = useLocalStorage( 'bg-color', 'bg-zinc-100')
    const [bgModal, setBgModal] = useLocalStorage( 'bg-modal', 'bg-zinc-200')
    const [textColor, setTextColor] = useLocalStorage('text-color', 'text-zinc-800')
    const [settings, setSettings] = useLocalStorage('settings', false)

    const [str, setStr] = useLocalStorage('str', 0)
    const [strFlag, setStrFlag] = useLocalStorage('strFlag', false)
    const [dex, setDex] = useLocalStorage('dex', 0)
    const [dexFlag, setDexFlag] = useLocalStorage('dexFlag', false)
    const [int, setInt] = useLocalStorage('int', 0)
    const [intFlag, setIntFlag] = useLocalStorage('intFlag', false)
    const [souls, setSouls] = useLocalStorage('souls', 0)
    const [soulsFlag, setSoulsFlag] = useLocalStorage('soulsFlag', false)
    const [vit, setVit] = useLocalStorage('vit', 0)
    const [nvl, setNvl] = useLocalStorage('nvl', 0)
    const [health, setHealth] = useLocalStorage('health', 10)
    const [power, setPower] = useLocalStorage('power', 10)
    const [nvlPrice, setNvlPrice] = useLocalStorage('nvlPrice', 10)
    const [view, setView] = useState(0)
    const [soulsMulti ,setSoulsMulti] = useLocalStorage('soulsMulti', 1)
    const [soulsMulti2 ,setSoulsMulti2] = useLocalStorage('soulsMulti2', 1)

    const [up1Flag, setUp1Flag] = useLocalStorage('up1Flag', false)

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
        setBgModal('bg-zinc-200')
    } 

    const openSettings = () => {
        setSettings(settings ? false : true)
    }

    const resetGame = () => {
        setStr(0)
        setDex(0)
        setInt(0)
        setSouls(0)
        setVit(0)
        setNvl(0)
        setPower(10)
        setHealth(10)
        setSoulsMulti(1)
        setNvlPrice(10)
        setStrFlag(false)
        setDexFlag(false)
        setIntFlag(false)
        setSoulsFlag(false)
    }

    const activeSouls = () => {
        setSoulsFlag(true)
    }

    const buyVit = () => {
        if (souls >= nvlPrice) {
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice((prev) => prev * 1.20)
            setVit((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyStr = () => {
        if (souls >= nvlPrice) {
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice((prev) => prev * 1.20)
            setStr((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyDex = () => {
        if (souls >= nvlPrice) {
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice((prev) => prev * 1.20)
            setDex((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyInt = () => {
        if (souls >= nvlPrice) {
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice((prev) => prev * 1.20)
            setInt((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }



    useEffect(() => {
        const timer = setInterval(() => {
           if (soulsFlag) {
               setSouls((prev) => prev + (soulsMulti * soulsMulti2))
           }
        }, 1000)
        setHealth(() => (vit * 1.15) + 10)
        setPower(() => (dex / 10) + (int / 10) + (str /10) + 10)
        
        return () => clearTimeout(timer)
       })

    return (
    <GameContext.Provider value={{up1Flag, setUp1Flag, view, setView, setSoulsMulti, nvlPrice, buyVit, buyDex, buyStr, buyInt, theme, toggleTheme, settings, openSettings, bgColor, bgModal, textColor, str, dex, int, souls, vit, nvl, health, power, soulsFlag, resetGame, activeSouls, strFlag, dexFlag, intFlag}}>
        {children}
    </GameContext.Provider>
    )
}