import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { formatNumber } from "../../../helper/formatNumber"

import { buyWeaponFunc } from "../../../helper/buyWeapons"
import { DataContext } from "../../../context/DataContext"



const Weapons = () => {
    const {str, dex, int, weapon1, souls, setSouls, setWeapon1, weapon2, setWeapon2, weapon3, setWeapon3, weapon4, setWeapon4, weaponM1, build} = useContext(DataContext)
    const [weapon1Price, setWeapon1Price] = useState(20)
    const [weapon2Price, setWeapon2Price] = useState(20)
    const [weapon3Price, setWeapon3Price] = useState(20)
    const [weapon4Price, setWeapon4Price] = useState(20)
    const [bg1, setBg1] = useState('')

    useEffect(() => {
        weaponM1 ? setWeapon1Price(5 * (1.07 ** weapon1) + 20) : setWeapon1Price(5 * (1.07 ** weapon1) + 20)
        build == 2 ? setWeapon2Price(((1.07 ** weapon2) * 5 + 20) * 0.75) : setWeapon2Price((1.07 ** weapon2) * 5 + 20)
        build == 2 ? setWeapon3Price((((1.07 ** weapon3 ) * 5 + 20) * 0.75) / 2) : setWeapon3Price(((1.07 ** weapon3 ) * 5 + 20) / 2)
        setWeapon4Price((1.07 ** weapon4 ) * 5 + 20)
    }, [weapon1, weapon2, weapon3, weapon4])

    if (weapon1 >= 1) {
        return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border bg-red-200 text-zinc-700 border-black`} onClick={() => buyWeaponFunc(0, [str], souls, setSouls, setWeapon1, weapon1Price)}>
                <p className="text-lg font-medium">Hammer</p>
                <p>Increase power</p>
                <p>lvl {weapon1}</p>
                <p>Unlock: str {formatNumber(weapon1Price, 1)}</p>
            </button>
        </div>
        )
    }

    if (weapon2 >= 1) {
        return (
            <div className="flex justify-center lg:justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
                <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border bg-yellow-100 text-zinc-700 border-black`} onClick={() => buyWeaponFunc(0, [dex], souls, setSouls, setWeapon2, weapon2Price)}>
                    <p className="text-lg font-medium">Small Sword</p>
                    <p>Increase power</p>
                    <p>lvl {weapon2}</p>
                    <p>Unlock: dex {formatNumber(weapon2Price, 1)}</p>
                </button>
            </div>
        )
    }

    if (weapon3 >= 1) {
        return (
            <div className="flex justify-center lg:justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
                <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border bg-red-200 text-zinc-700 border-black`} onClick={() => buyWeaponFunc(1, [str, dex], souls, setSouls, setWeapon3, weapon3Price)}>
                    <p className="text-lg font-medium">Straight Sword</p>
                    <p>Increase power</p>
                    <p>lvl {weapon3}</p>
                    <p>Unlock: str {formatNumber(weapon3Price, 1)} / dex {formatNumber(weapon3Price, 1)}</p>
                </button>
            </div>
        )
    }

    if (weapon4 >= 1) {
        return (
            <div className="flex justify-center lg:justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
                <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border bg-purple-200 text-zinc-700 border-black`} onClick={() => buyWeaponFunc(0, [int], souls, setSouls, setWeapon4, weapon4Price)}>
                    <p className="text-lg font-medium">Sorcerer Staff</p>
                    <p>Increase power</p>
                    <p>lvl {weapon4}</p>
                    <p>Unlock: int {formatNumber(weapon4Price, 1)}</p>
                </button>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-start lg:justify-start w-full pl-4 pb-5 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col  text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(0, [str], souls, setSouls, setWeapon1, weapon1Price)}>
                <p className="text-lg font-medium">Hammer</p>
                <p>Increase power</p>
                <p>Unlock: str {formatNumber(weapon1Price, 1)}</p>
            </button>
            <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(0, [dex], souls, setSouls, setWeapon2, weapon2Price)}>
                <p className="text-lg font-medium">Small Sword</p>
                <p>Increase power</p>
                <p>Unlock: dex {formatNumber(weapon2Price, 1)}</p>
            </button>
            <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(1, [str, dex], souls, setSouls, setWeapon3, weapon3Price)}>
                <p className="text-lg font-medium">Straight Sword</p>
                <p>Increase power</p>
                <p>Unlock: str {formatNumber(weapon3Price, 1)} / dex {formatNumber(weapon3Price, 1)}</p>
            </button>
            <button className={`flex flex-col text-xs w-[10rem] h-[8rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => buyWeaponFunc(0, [int], souls, setSouls, setWeapon4, weapon4Price)}>
                <p className="text-lg font-medium">Sorcerer Staff</p>
                <p>Increase power</p>
                <p>Unlock: int {formatNumber(weapon4Price, 1)}</p>
            </button>
        </div>
    )
}

export default Weapons