import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"



const Prestige = () => {
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
        <div className="flex flex-col justify-center items-center w-full pl-4 lg:px-0 gap-5 flex-wrap text-zinc-700">
            <p>You are tired... retire and become a sensei for the next generation</p>
        </div>
    )
}

export default Prestige