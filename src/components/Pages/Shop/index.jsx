import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

const Shop = () => {
    const {bgModal, str, dex, int, activeSouls, soulsFlag, theme, souls, vit, nvl, health, power, nvlPrice, buyVit, buyInt, buyStr, buyDex} = useContext(GameContext)
    const [bg, setBg] = useState("bg-red-200")
    const [upView, setUpView] = useState(0)
    const [actualView, setActualView] = useState(<></>)

    useEffect(() => {
        if (upView == 0) {
            setBg("bg-red-200")
            setActualView(<></>)
        }
        if (upView == 1) {
            setBg("bg-blue-200")
            setActualView(<></>)
        }
        if (upView == 2) {
            setBg("bg-purple-100")
            setActualView(<></>)
        }
    }, [upView])

    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 px-0 lg:px-2 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bg}`}>
                    <div className="flex flex-wrap text-zinc-700 justify-center lg:justify-start">
                        <button className="h-[2rem] min-w-[4rem] px-2 bg-red-200 rounded-xl" onClick={() => setUpView(0)}>Weapons</button>
                        <button className="h-[2rem] min-w-[4rem] px-2 bg-blue-200 rounded-xl" onClick={() => setUpView(1)}>Armour</button>
                        <button className="h-[2rem] min-w-[4rem] px-2 bg-purple-200 rounded-xl" onClick={() => setUpView(2)}>Magic</button>
                    </div>
                    {actualView}  
                </div>
            </>
    )
}

export default Shop