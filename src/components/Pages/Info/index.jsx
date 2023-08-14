import { useContext } from "react"
import { GameContext } from "../../../context/GameContext"

export default function (){
    const {bgModal} = useContext(GameContext)
    return (
        <div className={`w-[80%] h-fit pt-2 pb-16 px-4 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bgModal}`}>
            <h1 className="text-xl font-medium">Infinity Devil Tower - Version 0.6</h1>
            <p>Souls - The main currency of the game. Upgrade your stats with souls.</p>
            <p>Stats - Stats are vital to progress; they have a minor influence on power, and you can use them to buy weapons and upgrades. The upgrade tree is the difference between stats. Vitality is not used to buy weapons but is the main source of health.</p>
            <p>Weapons - Weapons have a major influence on power.</p>
            <p>Power and Health - Upgrade them to slay bosses. Power has an influence on soul gain.</p>
            <p>Boss - Fighting bosses will give you a minor soul multiplier, a soul gift, and influence on prestige gain.</p>
            <p>Prestige - Prestige gives you another upgrade tree, unlocks builds, and another soul multiplier.</p>
        </div>
    )
}