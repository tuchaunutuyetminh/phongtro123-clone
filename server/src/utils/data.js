import generateCode from './generateCode'
const prices = [
    {
        min: 0,
        max: 1,
        value: 'Dưới 1 triệu',
    },
    {
        min: 1,
        max: 2,
        value: 'Từ 1 - 2 triệu',
    },
    {
        min: 2,
        max: 3,
        value: 'Từ 2 - 3 triệu',
    },
    {
        min: 3,
        max: 5,
        value: 'Từ 3 - 5 triệu',
    },
    {
        min: 5,
        max: 7,
        value: 'Từ 5 - 7 triệu',
    },
    {
        min: 7,
        max: 10,
        value: 'Từ 7 - 10 triệu',
    },
    {
        min: 10,
        max: 15,
        value: 'Từ 10 - 15 triệu',
    },
    {
        min: 15,
        max: 999999,
        value: 'Trên 15 triệu'
    },
]
export const dataPrice = prices.map(item => ({
    ...item,
    code: generateCode(item.value),
}))


const area = [
    {
        min: 0,
        max: 20,
        value: 'Dưới 20 m'
    },
    {
        min: 20,
        max: 30,
        value: 'Từ 20 - 30 m'
    },
    {
        min: 30,
        max: 50,
        value: 'Từ 30 - 50 m'
    },
    {
        min: 50,
        max: 70,
        value: 'Từ 50 - 70 m'
    },
    {
        min: 70,
        max: 90,
        value: 'Từ 70 - 90 m'
    },
    {
        min: 90,
        max: 999999,
        value: 'Trên 90 m'
    },

]

export const dataArea = area.map(item => ({
    ...item,
    code: generateCode(item.value),
}))