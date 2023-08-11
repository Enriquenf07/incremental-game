import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../context/GameContext"
import Main from "./Main"
import Upgrades from "./Upgrades"
import Shop from "./Shop"
import Boss from "./Boss"
import Achievements from "./Achievements"

const View = () => {
    const {bgModal, str, dex, int, souls, vit, nvl, health, power, view} = useContext(GameContext)
    const [currentView, setCurrentView] = useState(<Main />)

    useEffect(() => {
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
    }, [view])

    return(
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
                {currentView}
            </div>
        </div>
    )
}

export default View