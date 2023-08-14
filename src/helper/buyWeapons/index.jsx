export function buyWeaponFunc (i, atr, souls, setSouls, setWeapon, price) {
    if (atr >= price && i==0) {
        setWeapon((prev) => prev + 1)
        return
    }
    if (atr[0] >= price && atr[1] >= price && i==1) {
        setWeapon((prev) => prev + 1)
        return
    }
}