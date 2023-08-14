export function buyWeaponFunc (i, atr, souls, setSouls, setWeapon, price) {
    if (atr[0] >= price[0] && i==0) {
        setWeapon((prev) => prev + 1)
        return
    }
    if (atr[0] >= price[0] && atr[1] >= price[0] && i==1) {
        setWeapon((prev) => prev + 1)
        return
    }
}