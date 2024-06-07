import { getNumbersfromSTrings } from "./helper"

export const getCodePrice = (totals, min, max) => {
    let arr = []
    return totals.map(item => {
        let arrMaxMin = getNumbersfromSTrings(item.value)

        if (arrMaxMin.length === 1) arr.push(arrMaxMin[0])
        return ({
            ...item,
            min: arrMaxMin.length === 2 ? arrMaxMin[0] : arrMaxMin[0] === min ? 0 : arrMaxMin[0],
            max: arrMaxMin.length === 2 ? arrMaxMin[1] : arrMaxMin[0] === max ? 999999 : arrMaxMin[0]
        })
    })
}

export const getCodeArea = (totals, min, max) => {
    return totals.map(item => {
        let arrMaxMin = getNumbersfromSTrings(item.value)

        return ({
            ...item,
            min: arrMaxMin.length === 2 ? arrMaxMin[0] : arrMaxMin[0] === min ? 0 : arrMaxMin[0],
            max: arrMaxMin.length === 2 ? arrMaxMin[1] : arrMaxMin[0] === max ? 999999 : arrMaxMin[0]
        })
    })
}

export const getCodesPrice = (entry, prices, min, max) => {
    const pricesWithMinMax = getCodePrice(prices, min, max)
    return pricesWithMinMax.filter(item => item.min <= entry && entry < item.max)
}

export const getCodesArea = (entry, area, min, max) => {
    const areasWithMinMax = getCodeArea(area, min, max)
    return areasWithMinMax.filter(item => item.min <= entry && entry < item.max)
    
}


