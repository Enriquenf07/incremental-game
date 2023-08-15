import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

import Weapons from "./Weapons"
import { DataContext } from "../../../context/DataContext"


const Shop = () => {
    const {bgModal} = useContext(DataContext)
    const [bg, setBg] = useState("bg-red-200")
    const [shopView, setShopView] = useState(0)
    const [actualView, setActualView] = useState(<></>)

    useEffect(() => {
        if (shopView == 0) {
            setBg("bg-red-200")
            setActualView(<Weapons />)
        }
    }, [shopView])

    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 px-0 lg:px-2 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bgModal}`}>
                    <div className="flex flex-wrap justify-center lg:justify-start">
                        <button className="h-[2rem] min-w-[4rem] px-2 rounded-xl" onClick={() => setShopView(0)}>Weapons</button>
                    </div>
                    {actualView}  
                </div>
            </>
    )
}

export default Shop