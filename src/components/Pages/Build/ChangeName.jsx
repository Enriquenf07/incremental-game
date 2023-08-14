import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

function ChangeName(){
    const {setName, bgModal, textColor} = useContext(GameContext)
    const [target, setTarget] = useState('')
    return(
        <div className="flex-col h-full w-full flex items-center pt-10 gap-4">
            <h1 className={textColor + ' flex justify-center items-center text-lg font-medium'}>NAME</h1>
            <input className={bgModal + ' rounded-xl flex justify-between items-center pl-4 w-[20rem] lg:w-[20rem] h-10 ' + textColor} onChange={(e) => setTarget(e.target.value)} type="text" />
            <button className={bgModal + ' p-4 py-3 rounded-xl font-medium text-lg' + textColor} onClick={() => setName(target)}> {'>'} </button>
        </div>
    )
}

export default ChangeName