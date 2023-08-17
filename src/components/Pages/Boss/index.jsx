import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { formatNumber } from "../../../helper/formatNumber"
import { DataContext } from "../../../context/DataContext"
import treeLogo from '../../../assets/icons/tree-face.svg'
import tutorialBossLogo from '../../../assets/icons/bully-minion.svg'
import eyeLogo from '../../../assets/icons/behold.svg'
import moonLogo from '../../../assets/icons/evil-moon.svg'
import witchLogo from '../../../assets/icons/witch-flight.svg'

const Boss = () => {
    const {power, health, setBoss, boss, setSouls, setPrestigeGain} = useContext(DataContext)
    const [bg, setBg] = useState("bg-green-200")
    const [bossName, setBossName] = useState('Tutorial Boss')
    const [bossHealth, setBossHealth] = useState(0)
    const [bossPower, setBossPower] = useState(0)
    const [floor, setFloor] = useState(1)
    const [bossLogo, setBossLogo] = useState(tutorialBossLogo)

    useEffect(() => {
        setBossHealth(() => ((boss * 10) ** 1.3) * 1.2)
        setBossPower(() => (boss * 10) ** 1.3)
        setFloor(Math.ceil(boss / 100))
        boss > 20 ? setBossName('The Running Tree') : null
        boss > 20 ? setBossLogo(treeLogo) : null
        boss > 100 ? setBossName('The eye') : null
        boss > 100 ? setBossLogo(eyeLogo) : null
        boss > 100 ? setBg('bg-red-200') : null
        boss > 200 ? setBossName('The evil moon') : null
        boss > 200 ? setBossLogo(moonLogo) : null
        boss > 200 ? setBg('bg-black') : null
        boss > 300 ? setBossName('The twin witches') : null
        boss > 300 ? setBossLogo(witchLogo) : null
        boss > 300 ? setBg('bg-purple-200') : null
    }, [boss])

    function fight(){
        if (health / bossPower > bossHealth / power){
            setSouls((prev) => prev + (10 * boss ** 1.05))
            setBoss((prev) => prev + 1)
            if (boss % 10 == 0 && boss > 1) {
                setPrestigeGain((prev) => prev + 1)
            }
        }
        
    }

    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 pb-4 lg:pb-0 px-0 lg:px-2 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bg}`}>
                    <div className="flex flex-col items-center  h-full w-full text-zinc-700 gap-4 overflow-hidden pt-4">
                        <div className="flex flex-col items-center pt-6">
                            <p className="">{floor}° Floor</p>
                            <p className="text-xl font-medium pb-6">{boss} - {bossName}</p>  
                            <img src={bossLogo} className="pb-4 w-40" alt="" />
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