import { getNumbersfromSTrings } from "./helper"

export const getCodePrice = (totals) => { 
    let arr = []
    return totals.map(item => {
        let arrMaxMin = getNumbersfromSTrings(item.value)
        
        if(arrMaxMin.length === 1) arr.push(arrMaxMin[0])
        let sortedArr = arr.sort()
        return ({
            ...item,
            min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
            max: sortedArr.indexOf(arrMaxMin[0]) === 0 ? arrMaxMin[0] : sortedArr.indexOf(arrMaxMin[0]) === 1 ? 9999999 : arrMaxMin[1]
        })
    })
 }

 export const getCodeArea = (totals) => { 
    let arr = []
    return totals.map(item => {
        let arrMaxMin = getNumbersfromSTrings(item.value)
        
        if(arrMaxMin.length === 1) arr.push(arrMaxMin[0])
        let sortedArr = arr.sort()
        return ({
            ...item,
            min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
            max: sortedArr.indexOf(arrMaxMin[0]) === 0 ? arrMaxMin[0] : sortedArr.indexOf(arrMaxMin[0]) === 1 ? 9999999 : arrMaxMin[1]
        })
    })
}

export const getCodesPrice = (arrMinMax, prices) => { 
    const pricesWithMinMax = getCodePrice(prices)
    return  pricesWithMinMax.filter(item => ((item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||  (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])))  
}

export const getCodesArea = (arrMinMax, area) => { 
    const pricesWithMinMax = getCodeArea(area)
    return  pricesWithMinMax.filter(item => ((item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||  (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])))  
}


