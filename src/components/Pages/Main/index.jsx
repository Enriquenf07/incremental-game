import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

import { formatNumber } from "../../../helper/formatNumber"
import { DataContext } from "../../../context/DataContext"

const Main = () => {
    const {bgModal, str, dex, int, soulsFlag, theme, build, souls, vit, nvl, health, power, nvlPrice, setSouls, soulsGain, time} = useContext(DataContext)
    const {activeSouls, buyVit, buyInt, buyStr, buyDex} = useContext(GameContext)
    

    return (
            <>
                <div className={`h-[25rem] lg:h-[30rem] min-w-[80%] lg:min-w-fit lg:px-20 rounded-3xl lg:rounded-xl flex flex-col items-center justify-center gap-4 ${bgModal}`}>
                    <button className={`${soulsFlag ? `${theme == 'light' ? 'bg-green-500': 'bg-green-600'}` : `${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'}`} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => activeSouls()}>Kill some guys</button>
                    {build == 4 ?
                    <button className={`${soulsFlag ? `${theme == 'light' ? 'bg-green-500': 'bg-green-600'}` : `${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'}`} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => setSouls(prev => prev + (soulsGain * 0.7))}>Invoke the dead</button>
                      : null}
                </div>
                <div className={` lg:h-[30rem] min-w-[80%] lg:min-w-fit lg:px-20 rounded-3xl lg:rounded-xl flex flex-col items-center justify-start pt-16 pb-8 gap-8 ${bgModal}`}>
                    <p>Souls for next level: {formatNumber(nvlPrice)} </p>
                    <div className="flex flex-col gap-1">
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyStr()}>Strength +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyDex()}>Dexterity +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyInt()}>Intelligence +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyVit()}>Vitality +</button>
                    </div>
                    
                </div>
            </>
    )
}

export default Main