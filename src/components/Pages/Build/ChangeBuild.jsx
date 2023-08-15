import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../../context/GameContext"
import {GiBlackKnightHelm, GiCurvyKnife, GiHalfDead} from 'react-icons/gi';
import {FaHatWizard} from 'react-icons/fa';
import {BiBody} from 'react-icons/bi'
import { DataContext } from "../../../context/DataContext";

function ChangeBuild(){
    const {bgModal, textColor, setBuild, setBuildFlag, necromancerFlag} = useContext(DataContext)

    const handleChange = (i) => {
        setBuild(i);
        setBuildFlag(true)
    }

    return(
        <div className="flex-wrap h-full w-full flex justify-center pt-10 gap-4">
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(-1)}>
                <p><BiBody size={'40px'} /></p>
                <p className="w-full">Begginer</p>
            </button>
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(1)}>
                <p><GiBlackKnightHelm size={'40px'} /></p>
                <p className="w-full">Knight</p>
                <p className="w-full">Starts with 10 str</p>
            </button>
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(2)}>
                <p>< GiCurvyKnife size={'40px'} /></p>
                <p className="w-full">Thief</p>
                <p>Dex weapons are 25% cheaper</p>
            </button>
            <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(3)}>
                <p><FaHatWizard size={'40px'} /></p>
                <p className="w-full">Sorcerer</p>
                <div className="flex flex-col ">
                    <p className="w-full">Change the pace of time. </p>
                    <p>Sec * 0.8</p>
                </div>
                
            </button>
            {necromancerFlag ? <button className={textColor + " h-[20rem] w-[15rem] rounded-xl flex-col flex justify-center items-center gap-5 " + bgModal} onClick={() => handleChange(4)}>
                <p><GiHalfDead size={'40px'} /></p>
                <p className="w-full">Necromancer</p>
                <p className="w-full">Add a clickable button that gain souls</p>
            </button> : null}
            
        </div>
    )
}

export default ChangeBuild