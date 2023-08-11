import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import Boss1 from "./BossViews/Boss1"

const Boss = () => {
    const {} = useContext(GameContext)
    const [bg, setBg] = useState("bg-red-200")
    const [upView, setUpView] = useState(0)
    const [actualView, setActualView] = useState(<></>)

    useEffect(() => {
        if (upView == 0) {
            setBg("bg-red-200")
            setActualView(<Boss1 />)
        }
        if (upView == 1) {
            setBg("bg-blue-200")
            setActualView(<></>)
        }
        if (upView == 2) {
            setBg("bg-purple-100")
            setActualView(<></>)
        }
    }, [upView])

    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 pb-4 lg:pb-0 px-0 lg:px-2 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 ${bg}`}>
                    {actualView}  
                </div>
            </>
    )
}

export default Boss