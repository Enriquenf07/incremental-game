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
    const [strSoulsCo ,setStrSoulsCo] = useLocalStorage('strSoulsCo', 0.25)
    const [dexSoulsMulti ,setDexSoulsMulti] = useLocalStorage('dexSoulsMulti', 1)
    const [dexSoulsCo ,setDexSoulsCo] = useLocalStorage('dexSoulsCo', 0.25)
    const [intSoulsMulti ,setIntSoulsMulti] = useLocalStorage('intSoulsMulti', 1)
    const [intSoulsCo ,setIntSoulsCo] = useLocalStorage('intSoulsCo', 0.25)
    const [powerSoulsMulti ,setPowerSoulsMulti] = useLocalStorage('powerSoulsMulti', 1)
    const [soulsGain, setSoulsGain] = useState((soulsMulti * soulsMulti2 * strSoulsMulti * dexSoulsMulti * intSoulsMulti * powerSoulsMulti) ** 1.04 + 1)

    const [up1Flag, setUp1Flag] = useLocalStorage('up1Flag', 0)
    const [up2Flag, setUp2Flag] = useLocalStorage('up2Flag', 0)
    const [strUp1, setStrUp1] = useLocalStorage('strUp1', false)
    const [dexUp1, setDexUp1] = useLocalStorage('dexUp1', false)
    const [intUp1, setIntUp1] = useLocalStorage('intUp1', false)
    const [intUp2, setIntUp2] = useLocalStorage('intUp2', false)


    const [weapon1, setWeapon1] = useLocalStorage('weapon1', 0)
    const [weapon2, setWeapon2] = useLocalStorage('weapon2', 0)
    const [weapon3, setWeapon3] = useLocalStorage('weapon3', 0)
    const [weapon4, setWeapon4] = useLocalStorage('weapon4', 0)
    const [weaponPM, setWeaponPM] = useLocalStorage('weaponPM', 0)

    const [weaponM, setWeaponM] = useLocalStorage('weaponM1', 0)

    const [boss, setBoss] = useLocalStorage('boss', 1)
    const [prestige, setPrestige] = useLocalStorage('prestige', 0)
    const [prestigeGain, setPrestigeGain] = useLocalStorage('prestigeGain', 0)
    const [name, setName] = useLocalStorage('name', '');
    const [build, setBuild] = useLocalStorage('build', -1);
    const [time, setTime] = useLocalStorage('time', 10)
    const [buildFlag, setBuildFlag] = useLocalStorage('buildFlag', false)
    const [weaponPM2, setWeaponPM2] = useLocalStorage('weaponPM2', 1)
    const [prestigeTotal, setPrestigeTotal] = useLocalStorage('totalPrestige', 0)

    const [necromancerFlag, setNecromancerFlag] = useLocalStorage('necromancerFlag', false)


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

        setUp1Flag(0)
        setUp2Flag(0)
        setStrUp1(false)
        setDexUp1(false)
        setIntUp1(false)
        setSoulsFlag(false)
        setIntUp2(false)

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
        setBoss(1)
        setWeaponM(0)
        setPrestige(0)
        setPrestigeGain(0)
        setBuild(-1)
        setBuildFlag(false)
        setName('')
        setPrestigeTotal(0)
        setTime(10)
        setNecromancerFlag(false)

    }

    const prestigeGame = () => {
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

        setBuild(0)
        setPrestige(prev => prev + prestigeGain)
        setPrestigeTotal(prev => prev + prestigeGain)
    
        setUp1Flag(0)
        setUp2Flag(0)
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
        setBoss(1)
        setWeaponM(0)
        setName('')
        setTime(10)
        setIntUp2(false)
    }

    const activeSouls = () => {
        setSoulsFlag(true)
    }

    const buyVit = () => {
        if (souls >= nvlPrice) {
            if (str >= 25 && dex >= 25 && int >= 25) {
                setPower((prev) => prev + 5)
            }
            if(nvl % 10 == 0){
                setVit((prev) => prev + 1)
                setStr((prev) => prev + 1)
                setDex((prev) => prev + 1)
                setInt((prev) => prev + 1)
                setSoulsMulti((prev) => prev * 1.05)
            }
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice(10 * 1.09 ** nvl)
            setVit((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyStr = () => {
        if (souls >= nvlPrice) {
            if (str == 25 || dex == 25 || int == 25) {
                setPower((prev) => prev + 10)
            }
            if(nvl % 10 == 0){
                setVit((prev) => prev + 1)
                setStr((prev) => prev + 1)
                setDex((prev) => prev + 1)
                setInt((prev) => prev + 1)
                setSoulsMulti((prev) => prev * 1.05)
            }
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice(10 * 1.09 ** nvl)
            setStr((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyDex = () => {
        if (str == 25 || dex == 25 || int == 25) {
            setPower((prev) => prev + 10)
        }
        if (souls >= nvlPrice) {
            if(nvl % 10 == 0){
                setVit((prev) => prev + 1)
                setStr((prev) => prev + 1)
                setDex((prev) => prev + 1)
                setInt((prev) => prev + 1)
                setSoulsMulti((prev) => prev * 1.05)
            }
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice(10 * 1.09 ** nvl)
            setDex((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const buyInt = () => {
        if (str == 25 || dex == 25 || int == 25) {
            setPower((prev) => prev + 10)
        }
        if (souls >= nvlPrice) {
            if(nvl % 10 == 0){
                setVit((prev) => prev + 1)
                setStr((prev) => prev + 1)
                setDex((prev) => prev + 1)
                setInt((prev) => prev + 1)
                setSoulsMulti((prev) => prev * 1.05)
            }
            setSouls((prev) => prev - nvlPrice)
            setNvlPrice(10 * 1.09 ** nvl)
            setInt((prev) => prev + 1)
            setNvl((prev) => prev + 1)
            return
        }
        return
    }

    const [w, setW] = useLocalStorage('w',0)


    useEffect(() => {
        const interval = setInterval(() => {
            if (soulsFlag) {
                if (w > 100) {
                    setSouls((prev) => prev + soulsGain )
                    setW(0)
                }
                setW(prev => prev + 1)
                }else{
                    setW(0)
                }
            
            }, time);
        intUp2 ? setHealth(() => power) : setHealth(((vit) * (1.04 ** vit) + 10))
        setWeaponPM(((weapon1 * 5) + (weapon2 * 5) + (weapon3 * 5) + (weapon4 * 5)) * weaponPM2)
        setPower(() => (dex ** 0.70) + (int ** 0.70) + (str ** 0.70) + 1 + (weaponPM ** 1.1))
        setStrSoulsMulti(() => strUp1 ? str ** (strSoulsCo + 1) : 1)
        setDexSoulsMulti(() => dexUp1 ? dex ** (dexSoulsCo + 1): 1)
        setIntSoulsMulti(() => intUp1 ? int ** (intSoulsCo + 1) : 1)
        setPowerSoulsMulti(() => power * 0.4)
        setSoulsMulti2(() => boss >= 1 ? boss + 1 ** 1.1 : boss)
        setSoulsGain(() => (((soulsMulti2 + strSoulsMulti + dexSoulsMulti + intSoulsMulti + powerSoulsMulti) * soulsMulti) * ((prestigeTotal ** 0.50) + 1)) ** 1.1 + 1)
        if (str >= 25 && dex == 25 || str == 25 && dex >= 25){
            setStr((prev) => prev + 2)
            setDex((prev) => prev + 2)
        }
        if (buildFlag) {
            if (build == 1) {
                setStr(10)
            }
    
            if (build == 3) {
                setTime(8)
            }
            setBuildFlag(false)
        }
        
        return () => clearTimeout(interval)
       })

    return (
    <GameContext.Provider value={{necromancerFlag, setNecromancerFlag, setWeaponPM2, prestigeTotal, prestigeGame, name, build, setBuildFlag, setName, setBuild, prestige, setPrestige, prestigeGain, setPrestigeGain, soulsGain, setBoss, boss, weaponM, weapon1, weapon2, weapon3, weapon4, setWeapon1, setWeapon2, setWeapon3, setWeapon4, strUp1, dexUp1, intUp1, intUp2, setStrSoulsCo, setSoulsMulti2, setStrSoulsMulti, setStrUp1, setDexUp1, setIntUp1, setIntUp2, up1Flag, setUp1Flag, up2Flag, setUp2Flag, view, setView, setSoulsMulti, nvlPrice, buyVit, buyDex, buyStr, buyInt, theme, toggleTheme, settings, openSettings, bgColor, bgModal, textColor, str, dex, int, souls, vit, nvl, health, power, soulsFlag, resetGame, activeSouls, setSouls}}>
        {children}
    </GameContext.Provider>
    )
}