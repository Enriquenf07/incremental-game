import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

const Main = () => {
    const {bgModal, str, dex, int, activeSouls, soulsFlag, theme, souls, vit, nvl, health, power, nvlPrice, buyVit, buyInt, buyStr, buyDex} = useContext(GameContext)

    return (
        <div className={"w-full lg:w-[80%] lg:block flex justify-center"}>
            <div className={"min-h-[30rem] w-full lg-w-fit flex gap-6 lg:gap-8 flex-wrap lg:justify-start justify-center"}>
            <div className={`min-h-[10rem] py-8 lg:py-0 lg:min-h-[30rem] w-[80%] lg:w-[18rem] text-lg font-medium flex flex-col gap-1 justify-center items-center rounded-3xl lg:rounded-xl ${bgModal}`}>
                    <p>Souls: {souls.toFixed()}</p>
                    <p className="pb-4">Nivel: {nvl}</p>
                    <p>Vit: {vit}</p>
                    <p>Str: {str}</p>
                    <p>Dex: {dex}</p>
                    <p className="pb-4">Int: {int}</p>
                    <p>Health: {health.toFixed()}</p>
                    <p>Power: {power.toFixed()}</p>
                </div>
                <div className={`h-[25rem] lg:h-[30rem] min-w-[80%] lg:min-w-fit lg:px-20 rounded-3xl lg:rounded-xl flex flex-col items-center lg:items-start justify-center gap-4 ${bgModal}`}>
                    <button className={`${soulsFlag ? `${theme == 'light' ? 'bg-green-500': 'bg-green-600'}` : `${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'}`} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => activeSouls()}>Kill some guys</button>
                </div>
                <div className={`h-[25rem] lg:h-[30rem] min-w-[80%] lg:min-w-fit lg:px-20 rounded-3xl lg:rounded-xl flex flex-col items-center justify-start pt-16 gap-8 ${bgModal}`}>
                    <p>Souls for next level: {nvlPrice.toFixed(1)} </p>
                    <div className="flex flex-col gap-1">
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyVit()}>Vitality +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyStr()}>Strength +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyDex()}>Dexterity +</button>
                        <button className={`${bgModal} ${theme == 'light' ? ' hover:bg-zinc-300': ' hover:bg-zinc-700'} text-lg font-medium  rounded-xl w-[12rem] h-[3rem]`} onClick={() => buyInt()}>Intelligence +</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main