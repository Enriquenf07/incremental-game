import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import {GiBlackKnightHelm, GiCurvyKnife} from 'react-icons/gi';
import {FaHatWizard} from 'react-icons/fa';

function ChangeBuild(){
    const {setName, bgModal, textColor, setBuild, setBuildFlag} = useContext(GameContext)
    const [target, setTarget] = useState('')

    const handleChange = (i) => {
        setBuild(i);
        setBuildFlag(true)
    }

    return(
        <div className="flex-wrap h-full w-full flex justify-center pt-10 gap-4">
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(1)}>
                <p><GiBlackKnightHelm size={'40px'} /></p>
                <p className="w-full">Knight</p>
                <p className="w-full">Starts with 10 str</p>
            </button>
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(2)}>
                <p>< GiCurvyKnife size={'40px'} /></p>
                <p className="w-full">Thief</p>
                <p>Dex weapons are 35% cheaper</p>
            </button>
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(3)}>
                <p><FaHatWizard size={'40px'} /></p>
                <p className="w-full">Sorcerer</p>
                <p className="w-full">Change the pace of time, time pass 20% faster</p>
            </button>
        </div>
    )
}

export default ChangeBuild