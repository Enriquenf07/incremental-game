import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"



const General = () => {
    const {setSoulsMulti, nvl, up1Flag, setUp1Flag} = useContext(GameContext)
    
    const [bg1, setBg1] = useState('')
    const [bg2, setBg2] = useState('')
    const [bg3, setBg3] = useState('')

    const up1Func = () => {
        if (nvl >= 10 && !up1Flag) {
            setSoulsMulti((prev) => prev + 1)
            setUp1Flag(true)
            setBg1('bg-[#d4af37]')
            return
        }
    }

    useEffect(() => {
        up1Flag ? setBg1('bg-[#d4af37]') : null
    }, [])

    return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => up1Func()}>
                <p>You become stronger. Kill faster!</p>
                <p>Costs: nvl 10</p>
            </button>
            {up1Flag ? <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg2} border-black`} onClick={() => e}>
                <p>You become stronger. Kill faster!</p>
                <p>Costs: nvl 100</p>
            </button> : null}
        </div>
    )
}

export default General