import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"

const Achievements = () => {
    const {} = useContext(GameContext)
    const [bg, setBg] = useState("bg-red-200")
    const [flag1, setFlag1] = useState(false)
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')

    useEffect(() => {
        if (flag1) {
            setText1('1 - Starting!!') 
            setText2('Thank you for playing the game.') 
            return
        }
        else{
            setText1('')
            setText2('')
        }
    }, [flag1])





    return (
            <>
                <div className={`min-h-[25rem] lg:h-[30rem] w-[80%] pt-2 px-0 lg:px-8 lg:pt-8 lg:min-w-0 lg:w-[55rem] lg:items-start items-center flex flex-col rounded-3xl lg:rounded-xl text-zinc-700 flex-wrap gap-8 ${bg}`}>
                        <div className="w-full p-4 flex flex-col items-center h-[6rem] lg:h-[4rem]">
                            <h1 className="text-lg font-medium">{text1}</h1>
                            <p>{text2}</p>    
                        </div> 
                        <div>
                            <div className="w-10 h-12 bg-[#d4af37]  rounded-xl flex flex-col justify-center items-center" onClick={() => setFlag1(!flag1)}>
                                I
                            </div>
                        </div>
                    </div>
            </>
    )
}

export default Achievements