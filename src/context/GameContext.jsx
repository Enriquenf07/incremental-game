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
    const [dex, setDex] = useLocalStorage('dex', 0)
    const [int, setInt] = useLocalStorage('int', 0)
    const [souls, setSouls] = useLocalStorage('souls', 0)
    const [soulsFlag, setSoulsFlag] = useLocalStorage('soulsFlag', false)
    const [vit, setVit] = useLocalStorage('vit', 0)
    const [nvl, setNvl] = useLocalStorage('nvl', 0)
    const [health, setHealth] = useLocalStorage('health', 10)
    const [power, setPower] = useLocalStorage('power', 1)
    const [nvlPrice, setNvlPrice] = useLocalStorage('nvlPrice', 10)
    const [view, setView] = useState(0)
    const [soulsMulti ,setSoulsMulti] = useLocalStorage('soulsMulti', 1)
    const [soulsMulti2 ,setSoulsMulti2] = useLocalStorage('soulsMulti2', 1)
    const [strSoulsMulti ,setStrSoulsMulti] = useLocalStorage('strSoulsMulti', 1)
    const [strSoulsCo ,setStrSoulsCo] = useLocalStorage('strSoulsCo', 0.20)
    const [dexSoulsMulti ,setDexSoulsMulti] = useLocalStorage('dexSoulsMulti', 1)
    const [dexSoulsCo ,setDexSoulsCo] = useLocalStorage('dexSoulsCo', 0.20)
    const [intSoulsMulti ,setIntSoulsMulti] = useLocalStorage('intSoulsMulti', 1)
    const [intSoulsCo ,setIntSoulsCo] = useLocalStorage('intSoulsCo', 0.20)
    const [powerSoulsMulti ,setPowerSoulsMulti] = useLocalStorage('powerSoulsMulti', 1)

    const [up1Flag, setUp1Flag] = useLocalStorage('up1Flag', false)
    const [up2Flag, setUp2Flag] = useLocalStorage('up2Flag', false)
    const [strUp1, setStrUp1] = useLocalStorage('strUp1', false)
    const [dexUp1, setDexUp1] = useLocalStorage('dexUp1', false)
    const [intUp1, setIntUp1] = useLocalStorage('intUp1', false)


    const [weapon1, setWeapon1] = useLocalStorage('weapon1', 0)
    const [weapon2, setWeapon2] = useLocalStorage('weapon2', 0)
    const [weapon3, setWeapon3] = useLocalStorage('weapon3', 0)
    const [weapon4, setWeapon4] = useLocalStorage('weapon4', 0)
    const [weaponPM, setWeaponPM] = useLocalStorage('weaponPM', 0)

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
        setPower(1)
        setHealth(10)
        setSoulsMulti(1)
        setNvlPrice(10)

        setUp1Flag(false)
        setUp2Flag(false)
        setStrUp1(false)
        setDexUp1(false)
        setIntUp1(false)
        setSoulsFlag(false)

        setWeapon1(0)
        setWeapon2(0)
        setWeapon3(0)
        setWeapon4(0)
        setWeaponPM(0)

        setStrSoulsMulti(1)
        setDexSoulsMulti(1)
        setIntSoulsMulti(1)
        setStrSoulsCo(0.2)
        setDexSoulsCo(0.2)
        setIntSoulsCo(0.2)

        setPowerSoulsMulti(1)
    }

    const activeSouls = () => {
        setSoulsFlag(true)
    }

    const buyVit = () => {
        if (souls >= nvlPrice / 10) {
            setSouls((prev) => prev - nvlPrice / 10)
            setNvlPrice((prev) => prev * 1.01)
            setVit((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyStr = () => {
        if (souls >= nvlPrice) {
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice((prev) => prev * 1.15)
            setStr((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyDex = () => {
        if (souls >= nvlPrice) {
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice((prev) => prev * 1.15)
            setDex((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyInt = () => {
        if (souls >= nvlPrice) {
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice((prev) => prev * 1.15)
            setInt((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }



    useEffect(() => {
        const timer = setInterval(() => {
           if (soulsFlag) {
               setSouls((prev) => prev + (soulsMulti * soulsMulti2 * strSoulsMulti * dexSoulsMulti * intSoulsMulti) + powerSoulsMulti)
           }
        }, 1000)
        setHealth(() => (vit * 1.15) + 10)
        setWeaponPM((weapon1 * 5) + (weapon2 * 5) + (weapon3 * 5) + (weapon4 * 5))
        setPower(() => (dex / 10) + (int / 10) + (str / 10) + 1 + weaponPM)
        setStrSoulsMulti(() => strUp1 ? str * strSoulsCo : 1)
        setDexSoulsMulti(() => dexUp1 ? dex * dexSoulsCo : 1)
        setIntSoulsMulti(() => intUp1 ? int * intSoulsCo : 1)
        setPowerSoulsMulti(() => power * 1)

        return () => clearTimeout(timer)
       })

    return (
    <GameContext.Provider value={{weapon1, weapon2, weapon3, weapon4, setWeapon1, setWeapon2, setWeapon3, setWeapon4, strUp1, dexUp1, intUp1, setStrSoulsCo, setSoulsMulti2, setStrSoulsMulti, setStrUp1, setDexUp1, setIntUp1, up1Flag, setUp1Flag, up2Flag, setUp2Flag, view, setView, setSoulsMulti, nvlPrice, buyVit, buyDex, buyStr, buyInt, theme, toggleTheme, settings, openSettings, bgColor, bgModal, textColor, str, dex, int, souls, vit, nvl, health, power, soulsFlag, resetGame, activeSouls, setSouls}}>
        {children}
    </GameContext.Provider>
    )
}