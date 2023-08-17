import { createContext, useEffect, useState, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { DataContext } from "./DataContext";
import Achievements from "../components/Pages/Achievements";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const {soulsMulti, powerSoulsMulti, soulsMulti2, intSoulsMulti, dexSoulsMulti, strSoulsMulti, weaponPM2, time, setTime, buildFlag, setPrestigeTotal, weaponPM, setDexSoulsMulti, setNvlPrice, setPower, setSettings, setTextColor, setBgModal,
        setStr, setDex, setInt, setVit, setNvl, setSoulsFlag, setHealth, setIntSoulsMulti, setWeaponPM, dexSoulsCo, setDexSoulsCo, intSoulsCo, setIntSoulsCo, setWeaponM, setTheme,
        setPowerSoulsMulti, necromancerFlag, setNecromancerFlag, setWeaponPM2, prestigeTotal, name, build, setBuildFlag, setName, setBuild, prestige, setPrestige,
        prestigeGain, setPrestigeGain, soulsGain, setBoss, boss, weaponM, weapon1, weapon2, weapon3, weapon4, setWeapon1, setWeapon2, setWeapon3, setWeapon4, strUp1, dexUp1,
        intUp1, intUp2, setStrSoulsCo, setSoulsMulti2, setStrSoulsMulti, setStrUp1, setDexUp1, setIntUp1, setIntUp2, up1Flag, setUp1Flag, up2Flag, setUp2Flag, view, setView, piromancerFlag, setPiromancerFlag,
        setSoulsMulti, nvlPrice, theme, settings, bgColor, bgModal, textColor, str, dex, int, souls, vit, nvl, health, weapon5, setWeapon5, weapon6, setWeapon6, weapon7, setWeapon7,
        power, soulsFlag, setSouls, setBgColor, strSoulsCo, setSoulsGain, achievements, setAchievements, setPartnerFlag, partnerFlag} = useContext(DataContext)

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
        setWeapon5(0)
        setWeapon6(0)
        setWeapon7(0)
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
        setTime(1000)
        setNecromancerFlag(false)
        setPiromancerFlag(false)
        setPartnerFlag(0)
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
        setWeapon5(0)
        setWeapon6(0)
        setWeapon7(0)
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
        setTime(1000)
        setIntUp2(false)
        setPartnerFlag(0)


        if (achievements['0'] >= 1){
            setAchievements({...achievements, '0': 1})
        }
        if (achievements['1'] >= 1){
            setAchievements({...achievements, '1': 1})
        }

        if (achievements['2'] >= 1){
            setAchievements({...achievements, '2': 1})
        }

        if (achievements['3'] >= 1){
            setAchievements({...achievements, '3': 1})
        }

        if (achievements['4'] >= 1){
            setAchievements({...achievements, '4': 1})
        }
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

    const [tick, setTick] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (soulsFlag) {
                setSouls((prev) => prev + soulsGain )  
            }
            setTick(prev => prev + 1)
        }, time);

        if (tick == 60) {
            setTick(0)
            if (partnerFlag == 1){
                setInt(prev => prev + 1)
           }
           if (partnerFlag == 2) {
               setStr(prev => prev + 1)
           }
           if (partnerFlag == 3) {
               setDex(prev => prev + 1)
           }
           if (partnerFlag == 4) {
               setVit(prev => prev + 1)
           }
        }
        

        intUp2 ? setHealth(() => power + ((vit) * (1.04 ** vit) + 10)) : setHealth(((vit) * (1.04 ** vit) + 10))
        setWeaponPM(((weapon1 * 5) + (weapon2 * 5) + (weapon3 * 5) + (weapon4 * 5) + (weapon5 * 1000) + (weapon6 * 1000) + (weapon7 * 1000)) * weaponPM2)
        setPower(() => (dex ** 0.70) + (int ** 0.70) + (str ** 0.70) + 1 + (weaponPM ** 1.1))
        setStrSoulsMulti(() => strUp1 ? str ** (strSoulsCo + 1) : 1)
        setDexSoulsMulti(() => dexUp1 ? dex ** (dexSoulsCo + 1): 1)
        setIntSoulsMulti(() => intUp1 ? int ** (intSoulsCo + 1) : 1)
        setPowerSoulsMulti(() => power * 0.4)
        setSoulsMulti2(() => boss >= 1 ? boss + 1 ** 1.1 : boss)
        setSoulsGain(() => (((1 + soulsMulti2 + strSoulsMulti + dexSoulsMulti + intSoulsMulti + powerSoulsMulti) * (soulsMulti + ((prestigeTotal ** 0.50) + 1)))) ** 1.1 + 1)
        if (str >= 25 && dex >= 25 || str >= 25 && dex >= 25){
            setStr((prev) => prev + 2)
            setDex((prev) => prev + 2)
        }
        if (buildFlag) {
            if (build == 1) {
                setStr(25)
                setVit(25)
            }
            if (build == 3) {
                setTime(600)
            }
            if (build == 5) {
                setInt(50)
            }
            setBuildFlag(false)
        }
        if (prestigeTotal > 1 && achievements['0'] == 0){
            setAchievements({...achievements, '0': 1})
        }

        if (prestigeTotal > 10 && achievements['1'] == 0){
            setAchievements({...achievements, '1': 1})
        }

        if (soulsGain > 1000000000 && achievements['2'] == 0){
            setAchievements({...achievements, '2': 1})
        }

        if (souls > 1000000000000 && achievements['3'] == 0){
            setAchievements({...achievements, '3': 1})
        }
        if (boss >= 1218 && achievements['4'] == 0){
            setAchievements({...achievements, '4': 1})
        }
        if (achievements['0'] == 1){
            setAchievements({...achievements, '0': 2})
            setSoulsMulti((prev) => prev * 2)
        }
        if (achievements['1'] == 1){
            setAchievements({...achievements, '1': 2})
            setSoulsMulti((prev) => prev * 2)
        }

        if (achievements['2'] == 1){
            setAchievements({...achievements, '2': 2})
            setSoulsMulti((prev) => prev * 2)
        }

        if (achievements['3'] == 1){
            setAchievements({...achievements, '3': 2})
            setSoulsMulti((prev) => prev * 2)
        }

        if (achievements['4'] == 1){
            setAchievements({...achievements, '4': 2})
            setSoulsMulti((prev) => prev * 2)
        }
        
        return () => clearTimeout(interval)
       })

    return (
    <GameContext.Provider value={{prestigeGame, buyVit, buyDex, buyStr, buyInt, toggleTheme, openSettings, resetGame, activeSouls}}>
        {children}
    </GameContext.Provider>
    )
}