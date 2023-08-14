import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { formatNumber } from "../../../helper/formatNumber"



const Boss = () => {
    const {power, health, setBoss, boss, setSouls, setPrestigeGain} = useContext(GameContext)
    const [bg, setBg] = useState("bg-red-200")
    const [bossName, setBossName] = useState('Tutorial Boss')
    const [bossHealth, setBossHealth] = useState(0)
    const [bossPower, setBossPower] = useState(0)

    useEffect(() => {
        setBossHealth(() => boss * 10 ** 1.1)
        setBossPower(() => boss * 10 ** 1.1)
    }, [boss])

    function fight(){
        if (health / bossPower > bossHealth / power){
            setSouls((prev) => prev + (10000 * boss ** 1.05))
            setBoss((prev) => prev + 1)
            if (boss % 10 == 0 && boss > 1) {
                setPrestigeGain((prev) => prev + 1)
            }
        }
        
    }

    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 pb-4 lg:pb-0 px-0 lg:px-2 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bg}`}>
                    <div className="flex flex-col items-center justify-center h-full w-full text-zinc-700 gap-4 overflow-hidden pt-4">
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-medium pb-2">{boss} - {bossName}</p>  
                            <p>Health: {formatNumber(bossHealth)}</p>
                            <p>Power: {formatNumber(bossPower)}</p>
                        </div>
                        <button className="h-14 w-32 rounded-xl justify-center items-center flex bg-red-400" onClick={() => fight()}>Fight</button>
                    </div> 
                </div>
            </>
    )
}

export default Boss