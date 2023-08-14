import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { formatNumber } from "../../../helper/formatNumber"



const Prestige = () => {
    const {setSoulsMulti, nvl, up1Flag, setUp1Flag, prestige, prestigeGame, boss, setPrestige, setBuild} = useContext(GameContext)
    const [prestigeGain, setPrestigeGain] = useState(0)
    const [bg1, setBg1] = useState('')
    const [bg2, setBg2] = useState('')
    const [bg3, setBg3] = useState('')

    useEffect(() => {
        setPrestigeGain(boss ** 0.16)
    })    

    const handlePrestige = () => {
        if (boss > 10) {
            prestigeGame()
            
            console.log('ola')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full pl-4 lg:px-0 gap-5 flex-wrap text-zinc-700">
            <p>You are tired... retire and become a sensei for the next generation</p>
            <button className="hover:bg-purple-300 rounded-xl w-[15rem] p-2" onClick={() => handlePrestige()}>Reset for {formatNumber(prestigeGain, 1)} prestige</button>
            <div>

            </div>
        </div>
    )
}

export default Prestige