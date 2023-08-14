import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

function ChangeBuild(){
    const {setName, bgModal, textColor, setBuild} = useContext(GameContext)
    const [target, setTarget] = useState('')
    return(
        <div className="flex-wrap h-full w-full flex justify-center pt-10 gap-4">
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl " + bgModal} onClick={() => setBuild(1)}>Knight</button>
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl " + bgModal} onClick={() => setBuild(2)}>Thief</button>
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl " + bgModal} onClick={() => setBuild(3)}>Sorcerer</button>
        </div>
    )
}

export default ChangeBuild