import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import { DataContext } from "../../../context/DataContext"

const Achievements = () => {
    const {achievements} = useContext(DataContext)
    const [bg, setBg] = useState("bg-red-200")
    const [bgA, setBgA] = useState({'0': '', '1': ''})
    const [flag1, setFlag1] = useState({'1': false, '2': false, '3': false})
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')

    useEffect(() => {
        if (flag1['1']) {
            setText1('1 - Starting!!') 
            setText2('Thank you for playing the game.') 
            return
        }
        if (flag1['2']) {
            setText1('2 - First prestige!!') 
            setText2('You killed the tutorial boss. gain 2x souls') 
            return
        }
        if (flag1['3']) {
            setText1('3 - Gain 10 prestige!!') 
            setText2('You are doing well. Gain 2x souls') 
            return
        }
        if (flag1['5']) {
            setText1('4 - Enzo Ferreira!!') 
            setText2('You finished the *****. Gain 2x souls') 
            return
        }
        if (flag1['6']) {
            setText1('5 - João lunardi!!') 
            setText2('You finished the *****. Gain 2x souls') 
            return
        }
        if (flag1['7']) {
            setText1('6 - Bia Bettega!!') 
            setText2('You finished the *****. Gain 2x souls') 
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
                        <div className="flex flex-wrap gap-2">
                            <div className="w-10 h-12 bg-[#d4af37]  rounded-xl flex flex-col justify-center items-center"
                            onClick={() => setFlag1({'1': !flag1['1'], '2': false, '3': false, '4': false, '5': false, '6': false})}>
                                I
                            </div>
                            {achievements['0'] >= 1 ? <div className="w-10 h-12 bg-[#d4af37]  rounded-xl flex flex-col justify-center items-center"
                            onClick={() => setFlag1({'2': !flag1['2'], '1': false, '3': false, '4': false, '5': false, '6': false})}>
                                II
                            </div> : null}
                            {achievements['1'] >= 1 ? <div className="w-10 h-12 bg-[#d4af37] rounded-xl flex flex-col justify-center items-center"
                            onClick={() => setFlag1({'3': !flag1['3'], '1': false, '2': false, '4': false, '5': false, '6': false})}>
                                III
                            </div> : null}
                            {achievements['2'] >= 1 ? <div className="w-10 h-12 bg-[#d4af37] rounded-xl flex flex-col justify-center items-center"
                            onClick={() => setFlag1({'4': !flag1['4'], '1': false, '2': false, '3': false, '5': false, '6': false})}>
                                III
                            </div> : null}
                            {achievements['3'] >= 1 ? <div className="w-10 h-12 bg-[#d4af37] rounded-xl flex flex-col justify-center items-center"
                            onClick={() => setFlag1({'5': !flag1['5'], '1': false, '2': false, '3': false, '4': false, '6': false})}>
                                IV
                            </div> : null}
                            {achievements['4'] >= 1 ? <div className="w-10 h-12 bg-[#d4af37] rounded-xl flex flex-col justify-center items-center"
                            onClick={() => setFlag1({'6': !flag1['6'], '1': false, '2': false, '3': false, '4': false, '5': false})}>
                                V
                            </div> : null}
                        </div>
                    </div>
            </>
    )
}

export default Achievements