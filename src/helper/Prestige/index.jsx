export function unlockBuild(setFlag, flag, setPrestige, prestige, price){
    if (prestige >= price && !flag) {
        setFlag(true)
        setPrestige(prev => prev - price)
    } 
}

export function unlockWeapon(setFlag, flag, setPrestige, prestige, price){
    if (prestige >= price && !flag) {
        setFlag(true)
        setPrestige(prev => prev - price)
    } 
}

export function classes(){
    return
}

