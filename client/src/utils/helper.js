import icons from "./icons"

const {IoIosStar, IoIosStarOutline} = icons

export const formatVietnameseToString = (keyword) => { 
    return keyword
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-")
}

export const renderStarToNumber = (number) => {
    
    let stars = []
    number = Math.round(number)
    for(let i = 0; i < +number; i++) stars.push(<IoIosStar color='orange'/>)
    for(let i = 5; i > +number; i--) stars.push(<IoIosStarOutline color='orange'/>)

    return stars
}

