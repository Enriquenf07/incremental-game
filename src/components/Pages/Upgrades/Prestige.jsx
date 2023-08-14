import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { formatNumber } from "../../../helper/formatNumber"
import { unlockBuild } from "../../../helper/Prestige"


const Prestige = () => {
    const {setSoulsMulti, nvl, up1Flag, setUp1Flag, prestige, prestigeGame, boss, setPrestige, setBuild, setPrestigeGain, prestigeGain, prestigeTotal, necromancerFlag, setNecromancerFlag, setSouls} = useContext(GameContext)
    const [bg1, setBg1] = useState('')
    const [bg2, setBg2] = useState('')
    const [bg3, setBg3] = useState('')

    useEffect(() => {
        setPrestigeGain(() => boss >= 10 ? boss ** 0.16 : 0)
    })    

    const handlePrestige = () => {
            prestigeGame()
    }

    return (
        <div className="flex flex-col justify-center items-center w-full pl-4 lg:px-0 gap-5 flex-wrap text-zinc-700">
            <p>Total Prestige: {formatNumber(prestigeTotal, 1)}</p>
            <p>Total Prestige Multiplier: {formatNumber((prestigeTotal ** 0.50) + 1, 1)}x</p>
            {boss >= 21 || prestigeTotal >= 1 ? <button className="hover:bg-purple-300 rounded-xl w-[15rem] p-2" onClick={() => handlePrestige()}>Reset for {formatNumber(prestigeGain, 1)} prestige</button> : null}
            <div className="w-full flex flex-wrap gap-2">
                <button className="p-4 border border-purple-700 rounded-xl" onClick={() => unlockBuild(setNecromancerFlag, necromancerFlag, setSouls, 50)}>
                    <p className="text-lg font-medium">Necromancer</p>
                    <p>price: 50 prestige</p>
                </button>
            </div>
        </div>
    )
}

export default Prestige