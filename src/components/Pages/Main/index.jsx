import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

import { formatNumber } from "../../../helper/formatNumber"

const Main = () => {
    const {bgModal, str, dex, int, activeSouls, soulsFlag, theme, souls, vit, nvl, health, power, nvlPrice, buyVit, buyInt, buyStr, buyDex} = useContext(GameContext)

    return (
            <>
                <div className={`h-[25rem] lg:h-[30rem] min-w-[80%] lg:min-w-fit lg:px-20 rounded-3xl lg:rounded-xl flex flex-col items-center lg:items-start justify-center gap-4 ${bgModal}`}>
                    <button className={`${soulsFlag ? `${theme == 'light' ? 'bg-green-500': 'bg-green-600'}` : `${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'}`} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => activeSouls()}>Kill some guys</button>
                </div>
                <div className={` lg:h-[30rem] min-w-[80%] lg:min-w-fit lg:px-20 rounded-3xl lg:rounded-xl flex flex-col items-center justify-start pt-16 pb-8 gap-8 ${bgModal}`}>
                    <p>Souls for next level: {formatNumber(nvlPrice)} </p>
                    <div className="flex flex-col gap-1">
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyStr()}>Strength +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyDex()}>Dexterity +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyInt()}>Intelligence +</button>
                    </div>
                    <p>Souls for next vitality: {formatNumber(nvlPrice / 10)} </p>
                    <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyVit()}>Vitality +</button>
                </div>
            </>
    )
}

export default Main