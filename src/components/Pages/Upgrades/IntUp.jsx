import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

import { intSoulsFunc } from "../../../helper/upgrades"
import { DataContext } from "../../../context/DataContext"


const IntUp = () => {
    const {int, intUp1, setIntUp1, intUp2, setIntUp2} = useContext(DataContext)
    
    const [bg1, setBg1] = useState('')
    const [bg2, setBg2] = useState('')

    useEffect(() => {
        intUp1 ? setBg1('bg-[#d4af37]') : null
        intUp2 ? setBg2('bg-[#d4af37]') : null
    }, [intUp1, intUp2])

    return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => intSoulsFunc(0, int, intUp1, setIntUp1)}>
                <p>Intelligence starts influencing souls gains.</p>
                <p>Unlocks: int 20</p>
            </button>
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg2} border-black`} onClick={() => intSoulsFunc(1, int, intUp2, setIntUp2)}>
                <p>You become a glass cannon. Let health equal to power</p>
                <p>Unlocks: int 150</p>
            </button>
        </div>
    )
}

export default IntUp