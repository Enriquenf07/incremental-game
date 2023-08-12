import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { soulsMultiFunc } from "../../../helper/upgrades"



const General = () => {
    const {setSoulsMulti, nvl, up1Flag, setUp1Flag, up2Flag, setUp2Flag} = useContext(GameContext)
    
    const [bg1, setBg1] = useState('')
    const [bg2, setBg2] = useState('')
    const [bg3, setBg3] = useState('')

    useEffect(() => {
        up1Flag ? setBg1('bg-[#d4af37]') : null
        up2Flag ? setBg2('bg-[#d4af37]') : null
    }, [up1Flag, up2Flag])

    return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => soulsMultiFunc(0, setSoulsMulti, nvl, up1Flag, setUp1Flag)}>
                <p>You become stronger. Kill faster!</p>
                <p>unlocks: lvl 10</p>
            </button>
            {up1Flag ? <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg2} border-black`} onClick={() => soulsMultiFunc(1, setSoulsMulti, nvl, up2Flag, setUp2Flag)}>
                <p>You become stronger. Kill faster!</p>
                <p>Unlocks: lvl 100</p>
            </button> : null}
        </div>
    )
}

export default General