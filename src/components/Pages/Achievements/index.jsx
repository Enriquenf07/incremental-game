import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

const Achievements = () => {
    const {bgModal, str, dex, int, activeSouls, soulsFlag, theme, souls, vit, nvl, health, power, nvlPrice, buyVit, buyInt, buyStr, buyDex} = useContext(GameContext)
    const [bg, setBg] = useState("bg-red-200")



    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 px-0 lg:px-2 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bg}`}>
                </div>
            </>
    )
}

export default Achievements