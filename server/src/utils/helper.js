export const getNumberFromString = (string) => {
    let number
    if(string.search('đồng/tháng') !== -1) {
       number = +string.match(/\d+/)[0] / Math.pow(10,3)
    } else if(string.search('triệu/tháng') !== -1){
       number = +string.match(/\d+/)[0]
    } else if(string.search('m') !== -1) {
      number = +string.match(/\d+/)[0]
    }

    return number
}

