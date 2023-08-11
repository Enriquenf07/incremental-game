import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"



const StrUp = () => {
    const {setSoulsMulti, nvl, up1Flag, setUp1Flag} = useContext(GameContext)
    
    const [bg1, setBg1] = useState('')

    const up1Func = () => {
        
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className="flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap">
            <button className={`flex flex-col text-zinc-700 text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} border-black`} onClick={() => e}>
                <p>All the heavy lift is paying off. Become powerful</p>
                <p>Costs: Str 20</p>
            </button>
        </div>
    )
}

export default StrUp