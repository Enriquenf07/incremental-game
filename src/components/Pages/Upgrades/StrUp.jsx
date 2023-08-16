import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

import { strSoulsFunc } from "../../../helper/upgrades"
import { DataContext } from "../../../context/DataContext"


const StrUp = () => {
    const {str, setStrUp1, strUp1} = useContext(DataContext)
    
    const [bg1, setBg1] = useState('')

    useEffect(() => {
        strUp1 ? setBg1('bg-[#d4af37]') : null
    }, [strUp1])

    return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => strSoulsFunc(0, str, strUp1, setStrUp1)}>
                <p>Strength starts influencing souls gains.</p>
                <p>Unlocks: str 20</p>
            </button>
        </div>
    )
}

export default StrUp