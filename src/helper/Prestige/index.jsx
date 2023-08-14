export function unlockBuild(setFlag, flag, setSouls, price){
    if (prestige >= price && !flag) {
        setFlag(true)
        setSouls(prev => prev - price)
    } 
}

export function classes(){
    return
}

