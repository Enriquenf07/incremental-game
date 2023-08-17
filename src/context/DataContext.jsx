import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
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
    const [weapon5, setWeapon5] = useLocalStorage('weapon5', 0)
    const [weapon6, setWeapon6] = useLocalStorage('weapon6', 0)
    const [weapon7, setWeapon7] = useLocalStorage('weapon7', 0)
    const [weaponPM, setWeaponPM] = useLocalStorage('weaponPM', 0)
    const [weaponM, setWeaponM] = useLocalStorage('weaponM1', 0)
    const [boss, setBoss] = useLocalStorage('boss', 1)
    const [prestige, setPrestige] = useLocalStorage('prestige', 0)
    const [prestigeGain, setPrestigeGain] = useLocalStorage('prestigeGain', 0)
    const [name, setName] = useLocalStorage('name', '');
    const [build, setBuild] = useLocalStorage('build', -1);
    const [time, setTime] = useState(1000)
    const [buildFlag, setBuildFlag] = useLocalStorage('buildFlag', false)
    const [weaponPM2, setWeaponPM2] = useLocalStorage('weaponPM2', 1)
    const [prestigeTotal, setPrestigeTotal] = useLocalStorage('totalPrestige', 0)
    const [necromancerFlag, setNecromancerFlag] = useLocalStorage('necromancerFlag', false)
    const [piromancerFlag, setPiromancerFlag] = useLocalStorage('piromancerFlag', false)

    const [achievements, setAchievements] = useLocalStorage('achievements', {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0})

    const [weaponsT2, setWeaponsT2] = useLocalStorage('weaponsT2', true)
    const [partnerFlag, setPartnerFlag] = useLocalStorage('PartnerFlag', true)

    return (
    <DataContext.Provider value={{soulsMulti, powerSoulsMulti, soulsMulti2, intSoulsMulti, dexSoulsMulti, strSoulsMulti, weaponPM2, time, setTime, buildFlag, setPrestigeTotal, weaponPM, setDexSoulsMulti, setNvlPrice, setPower, setSettings, setTextColor, setBgModal,
        setStr, setDex, setInt, setVit, setNvl, setSoulsFlag, setHealth, setIntSoulsMulti, setWeaponPM, dexSoulsCo, setDexSoulsCo, intSoulsCo, setIntSoulsCo, setWeaponM, setTheme,
        setPowerSoulsMulti, necromancerFlag, setNecromancerFlag, setWeaponPM2, prestigeTotal, name, build, setBuildFlag, setName, setBuild, prestige, setPrestige,
        prestigeGain, setPrestigeGain, soulsGain, setBoss, boss, weaponM, weapon1, weapon2, weapon3, weapon4, setWeapon1, setWeapon2, setWeapon3, setWeapon4, strUp1, dexUp1,
        intUp1, intUp2, setStrSoulsCo, setSoulsMulti2, setStrSoulsMulti, setStrUp1, setDexUp1, setIntUp1, setIntUp2, up1Flag, setUp1Flag, up2Flag, setUp2Flag, view, setView,
        setSoulsMulti, nvlPrice, theme, settings, bgColor, bgModal, textColor, str, dex, int, souls, vit, nvl, health, weapon5, setWeapon5, weapon6, setWeapon6, weapon7, setWeapon7,
        power, soulsFlag, setSouls, setBgColor, strSoulsCo, setSoulsGain, achievements, setAchievements, piromancerFlag, setPiromancerFlag, weaponsT2, setWeaponsT2, partnerFlag, setPartnerFlag}}>
        {children}
    </DataContext.Provider>
    )
}