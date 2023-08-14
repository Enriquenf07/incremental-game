import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import General from "./General"
import StrUp from "./StrUp"
import DexUp from "./DexUp"
import IntUp from "./IntUp"
import Prestige from "./Prestige"

const Upgrades = () => {
    const {bgModal, theme, textColor} = useContext(GameContext)
    const [bg, setBg] = useState("bg-gray-200")
    const [upView, setUpView] = useState(0)
    const [actualView, setActualView] = useState(<General />)

    useEffect(() => {
        if (upView == 0) {
            setBg(bgModal)
            setActualView(<General/>)
        }
        if (upView == 1) {
            setBg("bg-red-200")
            setActualView(<StrUp />)
        }
        if (upView == 2) {
            setBg("bg-yellow-100")
            setActualView(<DexUp />)
        }
        if (upView == 3) {
            setBg("bg-blue-200")
            setActualView(<IntUp />)
        }
        if (upView == 4) {
            setBg("bg-purple-200")
            setActualView(<Prestige />)
        }
    }, [upView, theme])

    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 px-0 lg:px-2 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bg}`}>
                    <div className="flex flex-wrap text-zinc-700 justify-center lg:justify-start">
                        <button className={`h-[2rem] min-w-[4rem] px-2 ${bgModal} ${textColor} rounded-xl`} onClick={() => setUpView(0)}>Upgrades</button>
                        <button className="h-[2rem] min-w-[4rem] px-2 bg-red-200 rounded-xl" onClick={() => setUpView(1)}>Str</button>
                        <button className="h-[2rem] min-w-[4rem] px-2 bg-yellow-100 rounded-xl" onClick={() => setUpView(2)}>Dex</button>
                        <button className="h-[2rem] min-w-[4rem] px-2 bg-blue-200 rounded-xl" onClick={() => setUpView(3)}>Int</button>
                        <button className="h-[2rem] min-w-[4rem] px-2 bg-purple-200 rounded-xl" onClick={() => setUpView(4)}>Prestige</button>
                    </div>
                    {actualView}  
                </div>
            </>
    )
}

export default Upgrades