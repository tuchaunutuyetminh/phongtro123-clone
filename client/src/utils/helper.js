import icons from "./icons"

const { IoIosStar, IoIosStarOutline } = icons

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
    for (let i = 0; i < +number; i++) stars.push(<IoIosStar color='orange' />)
    for (let i = 5; i > +number; i--) stars.push(<IoIosStarOutline color='orange' />)

    return stars
}

export const convertPercentToMoneyOrArea = (percent, name) => {
    //percent 10% => 3 đoạn 
    //9% => 1.35 * 10 = 14 / 5 = 2 dư 2 => 3 * 5 = 15 /10 = 1.5
    //11% => 1.65 * 10 = 17 / 5 => 3 dư 2 => 4 * 5 = 20 /10 = 2
    let target = name === 'price' ? 1.5 : 9
    return (Math.ceil(Math.round((percent * target)) / 5) * 5) / 10
}

export const getNumbersfromSTrings = (string) => {
    let arr = string.split(' ')
    return arr.map(item => +item).filter(item => !item === false)
}
export const convertMoneyOrAreatoPercent = (money, name) => {
    //percent 10% => 3 đoạn 
    //9% => 1.35 * 10 = 14 / 5 = 2 dư 2 => 3 * 5 = 15 /10 = 1.5
    //11% => 1.65 * 10 = 17 / 5 => 3 dư 2 => 4 * 5 = 20 /10 = 2
    let target = name === 'price' ? 1.5 : 9

    return Math.floor((money / target) * 100)
}


export const validate = (payload, setInvalidFields) => {
    let invalids = 0
    let fields = Object.entries(payload)
    fields.forEach(item => {
        if (item[1] === '') {
            setInvalidFields(prev => [
                ...prev,
                {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này'
                }
            ])
            invalids++
        }
    })

    fields.forEach(item => {
        switch (item[0]) {
            case 'password':
                if (item[1].length < 6) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
                    }])
                    invalids++
                }
                break;
            case 'phone':
                if (!+item[1]) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Vui lòng nhập đúng định dạng. VD: 03354778670'
                    }])
                    invalids++
                }
                break;

            default:
                break;
        }

    })
    return invalids
}


