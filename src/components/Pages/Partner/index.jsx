import vultureLogo from '../../../assets/icons/vulture.svg'
import catLogo from '../../../assets/icons/cat.svg'
import goblinLogo from '../../../assets/icons/goblin.svg'
import fairyLogo from '../../../assets/icons/fairy.svg'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'

function Partner(){
    const {partnerFlag, setPartnerFlag, setInt, setDex, setStr} = useContext(DataContext)


    return(
        <div className={`w-[80%] h-fit pt-2 pb-16 px-4 lg:w-[55rem] lg:items-center items-center text-zinc-900 flex flex-col rounded-3xl lg:rounded-xl flex-wrap gap-8 bg-green-300`}>
            <h1 className="text-xl font-medium">Choose a partner</h1>
            <div className='flex gap-16 h-full'>
                <button className={`${partnerFlag == 1 ? 'bg-green-400' : ''} rounded-xl p-6`} onClick={() => setPartnerFlag(1)}>
                    <img src={catLogo} className='w-20' alt="" />
                    The cat
                </button>
                <button className={`${partnerFlag == 2 ? 'bg-green-400' : ''} rounded-xl p-6`} onClick={() => setPartnerFlag(2)}>
                    <img src={goblinLogo} className='w-20' alt="" />
                    The goblin
                </button>
                <button className={`${partnerFlag == 3 ? 'bg-green-400' : ''} rounded-xl p-6`} onClick={() =>  setPartnerFlag(3)}>
                    <img src={vultureLogo} className='w-20' alt="" />
                    The Vulture
                </button>
                <button className={`${partnerFlag == 4 ? 'bg-green-400' : ''} rounded-xl p-6`} onClick={() =>  setPartnerFlag(4)}>
                    <img src={fairyLogo} className='w-20' alt="" />
                    The Fairy
                </button>
            </div>
            {partnerFlag > 0 ? <p>
                    Every minute produces 1 {partnerFlag == 1? 'Intelligence' : partnerFlag == 2 ? 'Strength' : partnerFlag == 3 ? 'Dexterity' : 'Vitality'}
                </p>: null}
        </div>
    )
}

export default Partner