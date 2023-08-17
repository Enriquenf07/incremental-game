import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { soulsMultiFunc } from "../../../helper/upgrades"
import { DataContext } from "../../../context/DataContext"



const General = () => {
    const {theme, textColor, setSoulsMulti, nvl, up1Flag, setUp1Flag, up2Flag, setUp2Flag} = useContext(DataContext)
    const [price, setPrice] = useState(up1Flag * 50 + 50)

    const [bg1, setBg1] = useState('bg-[#ffd700] text-zinc-700')
    
    useEffect(() => {
        setPrice((2**up1Flag) * 25)
    }, [up1Flag])
    


    return (
        <div className={`flex justify-start items-start w-full pl-4 lg:px-0 gap-5 flex-wrap ${textColor}`}>
            <button className={`flex flex-col text-xs w-[7rem] h-[5rem] justify-center items-center rounded-xl border ${bg1} ${theme == 'dark' ? 'border-zinc-100' : 'border-zinc-700'}`} onClick={() => soulsMultiFunc(0, setSoulsMulti, nvl, up1Flag, setUp1Flag, price)}>
                <p>You become stronger. Kill faster!</p>
                <p>Lvl {up1Flag}</p>
                <p>unlocks: lvl {price}</p>
            </button>
            
        </div>
    )
}

export default General