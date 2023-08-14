import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { soulsMultiFunc } from "../../../helper/upgrades"



const General = () => {
    const {theme, textColor, setSoulsMulti, nvl, up1Flag, setUp1Flag, up2Flag, setUp2Flag} = useContext(GameContext)
    
    const [bg1, setBg1] = useState('')
    const [bg2, setBg2] = useState('')
    const [bg3, setBg3] = useState('')

    useEffect(() => {
        up1Flag ? setBg1('bg-[#d4af37] text-zinc-700') : null
        up2Flag ? setBg2('bg-[#d4af37] text-zinc-700') : null
    }, [up1Flag, up2Flag])

    return (
        <div className={`flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap ${textColor}`}>
            <button className={`flex flex-col text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} ${theme == 'dark' ? 'border-zinc-100' : 'border-zinc-700'}`} onClick={() => soulsMultiFunc(0, setSoulsMulti, nvl, up1Flag, setUp1Flag)}>
                <p>You become stronger. Kill faster!</p>
                <p>unlocks: lvl 50</p>
            </button>
            {up1Flag ? <button className={`flex flex-col text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg2} ${theme == 'dark' ? 'border-zinc-100' : 'border-zinc-700'} border-black`} onClick={() => soulsMultiFunc(1, setSoulsMulti, nvl, up2Flag, setUp2Flag)}>
                <p>You become stronger. Kill faster!</p>
                <p>Unlocks: lvl 100</p>
            </button> : null}
        </div>
    )
}

export default General