import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../context/GameContext"



export function soulsMultiFunc (i, setSoulsMulti, nvl, flag, setFlag, price) {
    if (nvl >= price && i == 0) {
        setSoulsMulti((prev) => prev * 2)
        setFlag((prev) => prev + 1)
        return
    }
}

export function strSoulsFunc (i, str, flag, setFlag, setCo) {

    if (str >= 20 && !flag && i==0) {
        setFlag(true) 
        return
    }
    if (str >= 40 && !flag && i==1) {
        setCo((prev) => prev * 2)
        setFlag(true)
        return
    }
}

export function dexSoulsFunc (i, dex, flag, setFlag, setCo) {

    if (dex >= 20 && !flag && i==0) {
        setFlag(true) 
        return
    }
    if (dex >= 40 && !flag && i==1) {
        setCo((prev) => prev * 2)
        setFlag(true)
        return
    }
}

export function intSoulsFunc (i, int, flag, setFlag, setCo) {

    if (int >= 20 && !flag && i==0) {
        setFlag(true) 
        return
    }
    if (int >= 150 && !flag && i==1) {
        setFlag(true)
        return
    }
}