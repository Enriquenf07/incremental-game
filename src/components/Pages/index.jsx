import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../context/GameContext"
import Main from "./Main"
import Upgrades from "./Upgrades"
import Shop from "./Shop"
import Boss from "./Boss"
import Achievements from "./Achievements"
import Info from "./Info"

import { formatNumber } from "../../helper/formatNumber"
import { DataContext } from "../../context/DataContext"


const View = () => {
    const {name, build, bgModal, str, dex, int, souls, soulsGain, vit, nvl, health, power, view, prestige} = useContext(DataContext)
    const [currentView, setCurrentView] = useState(<Main />)
    const [buildName, setBuildName] = useState('Beginner')

    useEffect(() => {
        if (build == 1) {
            setBuildName('Knight')
        }
        if (build == 2) {
            setBuildName('Thief')
        }
        if (build == 3) {
            setBuildName('Sorcerer')
        }
        if (view == 0) {
            setCurrentView(<Main />)
            return
        }
        if (view == 1) {
            setCurrentView(<Upgrades />)
            return
        }
        if (view == 2) {
            setCurrentView(<Shop />)
            return
        }
        if (view == 3) {
            setCurrentView(<Boss />)
            return
        }
        if (view == 4) {
            setCurrentView(<Achievements />)
            return
        }
        if (view == 5) {
            setCurrentView(<Info />)
            return
        }

        
    }, [view])

    

    return(
        <div className={"w-full lg:w-[80%] lg:block flex justify-center"}>
            <div className={"min-h-[30rem] w-full lg-w-fit flex gap-6 lg:gap-8 flex-wrap lg:justify-start justify-center"}>
                <div className="flex lg:flex-col flex-col-reverse gap-6 lg:gap-3 w-full lg:w-fit items-center">
                    <div className={`min-h-[10rem] py-8 lg:py-0 lg:min-h-[30rem] w-[80%] lg:w-[18rem] text-lg font-medium flex flex-col gap-1 justify-center items-center rounded-3xl lg:rounded-xl ${bgModal}`}>
                        <p>Souls: {formatNumber(souls)}</p>
                        <p>Souls/Sec: {formatNumber(soulsGain)}</p>
                        <p className="pb-4">Level: {formatNumber(nvl)}</p>
                        <p>Vit: {formatNumber(vit)}</p>
                        <p>Str: {formatNumber(str)}</p>
                        <p>Dex: {formatNumber(dex)}</p>
                        <p className="pb-4">Int: {formatNumber(int)}</p>
                        <p>Health: {formatNumber(health)}</p>
                        <p>Power: {formatNumber(power)}</p>
                    </div>
                    <div className={`min-h-fit py-8  w-[80%] lg:w-[18rem] text-lg font-medium flex flex-col gap-1 justify-center items-center rounded-3xl lg:rounded-xl ${bgModal}`}>
                        <p>Name: {name}</p>
                        <p>Build: {buildName}</p>
                        <p>Prestige: {formatNumber(prestige, 1)}</p>
                    </div>
                </div>
                {currentView}
            </div>
        </div>
    )
}

export default View