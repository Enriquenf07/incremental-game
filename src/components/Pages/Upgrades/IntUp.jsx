import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

import { intSoulsFunc } from "../../../helper/upgrades"


const IntUp = () => {
    const {int, intUp1, setIntUp1} = useContext(GameContext)
    
    const [bg1, setBg1] = useState('')

    useEffect(() => {
        intUp1 ? setBg1('bg-[#d4af37]') : null
    }, [intUp1])

    return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => intSoulsFunc(0, int, intUp1, setIntUp1)}>
                <p>Intelligence starts influencing souls gains.</p>
                <p>Unlocks: int 20</p>
            </button>
        </div>
    )
}

export default IntUp