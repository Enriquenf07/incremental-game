import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { formatNumber } from "../../../helper/formatNumber"

import { buyWeaponFunc } from "../../../helper/buyWeapons"
import { DataContext } from "../../../context/DataContext"
import weapon1logo from '../../../assets/icons/battle-axe.svg'
import weapon2logo from '../../../assets/icons/plain-dagger.svg'
import weapon3logo from '../../../assets/icons/two-handed-sword.svg'
import weapon4logo from '../../../assets/icons/wizard-staff.svg'
import weapon5logo from '../../../assets/icons/breastplate.svg'
import weapon6logo from '../../../assets/icons/scythe.svg'
import weapon6logo2 from '../../../assets/icons/scythe.svg'
import weapon7logo from '../../../assets/icons/spell-book.svg'


const Weapons = () => {
    const {str, dex, int, weapon1, souls, setSouls, setWeapon1, weapon2, setWeapon2, weapon3, setWeapon3, weapon4, setWeapon4, weapon5, setWeapon5, weapon6, setWeapon6, weapon7, setWeapon7, weaponM1, build, weaponsT2} = useContext(DataContext)
    const [weapon1Price, setWeapon1Price] = useState(20)
    const [weapon2Price, setWeapon2Price] = useState(20)
    const [weapon3Price, setWeapon3Price] = useState(20)
    const [weapon4Price, setWeapon4Price] = useState(20)
    const [weapon5Price, setWeapon5Price] = useState(20)
    const [weapon6Price, setWeapon6Price] = useState(20)
    const [weapon7Price, setWeapon7Price] = useState(20)
    const [bg1, setBg1] = useState('')

    useEffect(() => {
        weaponM1 ? setWeapon1Price(5 * (1.07 ** weapon1) + 20) : setWeapon1Price(5 * (1.07 ** weapon1) + 20)
        build == 2 ? setWeapon2Price(((1.07 ** weapon2) * 5 + 20) * 0.75) : setWeapon2Price((1.07 ** weapon2) * 5 + 20)
        build == 2 ? setWeapon3Price((((1.07 ** weapon3 ) * 5 + 20) * 0.75) / 2) : setWeapon3Price(((1.07 ** weapon3 ) * 5 + 20) / 2)
        setWeapon4Price((1.07 ** weapon4 ) * 5 + 20)
        setWeapon5Price((1.07 ** weapon5 ) * 25 + 20)
        build == 2 ? setWeapon6Price(((1.13 ** weapon6 ) * 30 + 20) * 0.75) : setWeapon6Price((1.13 ** weapon6 ) * 30 + 20)
        setWeapon7Price((1.13 ** weapon7 ) * 30 + 20)
    }, [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7])

    return (
        <div className="flex justify-center items-start lg:justify-start w-full pl-4 pb-5 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col  text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(0, [str], souls, setSouls, setWeapon1, weapon1Price)}>
                <img src={weapon1logo}  className='w-8 p-1 rounded-full bg-amber-100 ' alt="" />
                <p className="text-lg font-medium">Battle Axe</p>
                <p>level {weapon1}</p>
                <p>Increase power</p>
                <p>Unlock: str {formatNumber(weapon1Price, 1)}</p>
            </button>
            <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(0, [dex], souls, setSouls, setWeapon2, weapon2Price)}>
                <img src={weapon2logo}  className='w-8 p-1 rounded-full bg-amber-100 ' alt="" />
                <p className="text-lg font-medium">Dagger</p>
                <p>level {weapon2}</p>
                <p>Increase power</p>
                <p>Unlock: dex {formatNumber(weapon2Price, 1)}</p>
            </button>
            <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(1, [str, dex], souls, setSouls, setWeapon3, weapon3Price)}>
                <img src={weapon3logo}  className='w-8 p-1 rounded-full bg-amber-100 ' alt="" />
                <p className="text-lg font-medium">Straight Sword</p>
                <p>level {weapon3}</p>
                <p>Increase power</p>
                <p>Unlock: str {formatNumber(weapon3Price, 1)} / dex {formatNumber(weapon3Price, 1)}</p>
            </button>
            <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(0, [int], souls, setSouls, setWeapon4, weapon4Price)}>
                <img src={weapon4logo}  className='w-8 p-1 rounded-full bg-amber-100 ' alt="" />
                <p className="text-lg font-medium">Sorcerer Staff</p>
                <p>level {weapon4}</p>
                <p>Increase power</p>
                <p>Unlock: int {formatNumber(weapon4Price, 1)}</p>
            </button>
            {weaponsT2 ? <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} 
            onClick={() => buyWeaponFunc(0, [str], souls, setSouls, setWeapon5, weapon5Price)}>
                <img src={weapon5logo}  className='w-8 p-1 rounded-full bg-amber-100 ' alt="" />
                <p className="text-lg font-medium">Armour</p>
                <p>level {weapon5}</p>
                <p>Increase power</p>
                <p>Unlock: str {formatNumber(weapon5Price, 1)}</p>
            </button> : null}
            {weaponsT2 ? <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`}
            onClick={() => buyWeaponFunc(0, [dex], souls, setSouls, setWeapon6, weapon6Price)}>
                <img src={build == 5 ? weapon6logo2 : weapon6logo}  className='w-8 p-1 rounded-full bg-amber-100 ' alt="" />
                <p className="text-lg font-medium">{build == 5 ? 'Reaper Scythe' : 'Scythe'}</p>
                <p>level {weapon6}</p>
                <p>Increase power</p>
                <p>Unlock: int {formatNumber(weapon6Price, 1)}</p>
            </button> : null}
            {weaponsT2 ? <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`}
            onClick={() => buyWeaponFunc(0, [int], souls, setSouls, setWeapon7, weapon7Price)}>
                <img src={weapon7logo}  className='w-8 p-1 rounded-full bg-amber-100 ' alt="" />
                <p className="text-lg font-medium">Spell Book</p>
                <p>level {weapon7}</p>
                <p>Increase power</p>
                <p>Unlock: int {formatNumber(weapon7Price, 1)}</p>
            </button> : null}
            
        </div>
    )
}

export default Weapons