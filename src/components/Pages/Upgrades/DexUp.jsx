import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

import { dexSoulsFunc } from "../../../helper/upgrades"
import { DataContext } from "../../../context/DataContext"


const DexUp = () => {
    const {dex, setDexUp1, dexUp1} = useContext(DataContext)
    
    const [bg1, setBg1] = useState('')

    useEffect(() => {
        dexUp1 ? setBg1('bg-[#d4af37]') : null
    }, [dexUp1])

    return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => dexSoulsFunc(0, dex, dexUp1, setDexUp1)}>
                <p>Dexterity starts influencing souls gains.</p>
                <p>Unlocks: dex 20</p>
            </button>
        </div>
    )
}

export default DexUp