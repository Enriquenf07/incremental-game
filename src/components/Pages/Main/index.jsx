import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

const Main = () => {
    const {bgModal, str, dex, int, activeStr, activeDex, activeInt, dexFlag, intFlag, strFlag} = useContext(GameContext)
    return (
        <div className={"w-full lg:w-[80%] lg:block flex justify-center"}>
            <div className={"min-h-[25rem] w-full lg-w-fit flex gap-8 flex-wrap lg:justify-start justify-center"}>
                <div className={`h-[25rem] w-[80%] lg:w-[13rem] flex flex-col gap-1 justify-center items-center rounded-3xl lg:rounded-xl ${bgModal}`}>
                    <p>Str: {str}</p>
                    <p>Dex: {dex}</p>
                    <p>Int: {int}</p>
                </div>
                <div className={`h-[25rem] min-w-[80%] lg:min-w-fit lg:px-10 rounded-3xl lg:rounded-xl flex flex-col items-center lg:items-start justify-center gap-4 ${bgModal}`}>
                    <button className={`${strFlag ? 'bg-green-600' : 'bg-red-600'} rounded w-[10rem] h-[2rem] text-zinc-200`} onClick={() => activeStr()}>Active strength</button>
                    <button className={`${dexFlag ? 'bg-green-600' : 'bg-red-600'} rounded w-[10rem] h-[2rem] text-zinc-200`} onClick={() => activeDex()}>Active dexterity</button>
                    <button className={`${intFlag ? 'bg-green-600' : 'bg-red-600'} rounded w-[10rem] h-[2rem] text-zinc-200`} onClick={() => activeInt()}>Active intelligence</button>
                </div>
            </div>
        </div>
    )
}

export default Main