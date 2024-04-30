import React, { memo, useEffect, useState } from 'react'
import icons from '../../utils/icons'
import { Button } from '../../components'
import { getNumbersfromSTrings } from '../../utils/helper'
import { getCodesArea, getCodesPrice } from '../../utils/getCode'
const { FaArrowLeft } = icons
const PopupFilter = ({ setIsShowModal, content, name, handleSubmit, queries, arrMinMax }) => {
    // 
    //name === 'price' ? arrMinMax?.priceArr[1] : name === 'area' ? arrMinMax?.areaArr[1] : 100

    console.log(arrMinMax)
    const [persent1, setPersent1] = useState(name === 'price' && arrMinMax?.priceArr ? arrMinMax?.priceArr[0] : name === 'area' && arrMinMax?.areaArr ? arrMinMax?.areaArr[0] : 0)
    const [persent2, setPersent2] = useState(name === 'price' && arrMinMax?.priceArr ? arrMinMax?.priceArr[1] : name === 'area' && arrMinMax?.areaArr ? arrMinMax?.areaArr[1] : 100)
    const [activedEl, setActivedEl] = useState('')
    useEffect(() => {
        const activedTrackEl = document.getElementById('track-active')
        if (activedTrackEl) {
            if (persent2 <= persent1) {
                activedTrackEl.style.left = `${persent2}%`
                activedTrackEl.style.right = `${100 - persent1}%`
            } else {
                activedTrackEl.style.left = `${persent1}%`
                activedTrackEl.style.right = `${100 - persent2}%`
            }
        }
    }, [persent1, persent2])

    const handleClickTrack = (e, value) => {
        e.stopPropagation()
        const stackEl = document.getElementById('track')
        const stackRect = stackEl.getBoundingClientRect()
        let percent = value ? value : Math.round((e.clientX - stackRect.left) * 100 / stackRect.width)

        if (Math.abs(percent - persent1) <= (Math.abs(percent - persent2))) {
            setPersent1(percent)
        } else {
            setPersent2(percent)

        }
    }

    const handlePrice = (code, value) => {
        setActivedEl(code)
        let arrMaxMin = getNumbersfromSTrings(value)

        if (arrMaxMin.length === 1) {
            if (arrMaxMin[0] === 1) {
                setPersent1(0)
                setPersent2(convertTo100(1))
            }
            if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
                setPersent1(100)
                setPersent2(100)
            }
            if (arrMaxMin[0] === 20) {
                setPersent1(0)
                setPersent2(convertTo100(20))
            }
        }
        if (arrMaxMin.length === 2) {
            setPersent1(convertTo100(arrMaxMin[0]))
            setPersent2(convertTo100(arrMaxMin[1]))
        }

        console.log(arrMaxMin)
    }

    //đổi từ phần trăm sang số tiền hoặc diện tích
    const convert100ToTarget = (percent) => {
        //percent 10% => 3 đoạn 
        //9% => 1.35 * 10 = 14 / 5 = 2 dư 2 => 3 * 5 = 15 /10 = 1.5
        //11% => 1.65 * 10 = 17 / 5 => 3 dư 2 => 4 * 5 = 20 /10 = 2
        return name === 'price' ? (Math.ceil(Math.round((percent * 1.5)) / 5) * 5) / 10 : name === 'area' ? Math.ceil(Math.round((percent * 0.9) / 5) * 5) : 0
    }

    //đổi từ số tiền (diện tích) sang phần trăm
    const convertTo100 = (money) => {
        //percent 10% => 3 đoạn 
        //9% => 1.35 * 10 = 14 / 5 = 2 dư 2 => 3 * 5 = 15 /10 = 1.5
        //11% => 1.65 * 10 = 17 / 5 => 3 dư 2 => 4 * 5 = 20 /10 = 2
        let target = name === 'price' ? 15 : 90

        return Math.floor((money / target) * 100)
    }

    //hàm xử lý để tìm bài đăng theo giá hoặc diện tích bất kì trước khi gửi yêu cầu lấy bài đăng
    const handleBeforeSubmit = (e) => {
        const gaps = name === 'price' ? getCodesPrice([convert100ToTarget(persent1), convert100ToTarget(persent2)], content)
            : name === 'area' ? getCodesArea([convert100ToTarget(persent1), convert100ToTarget(persent2)], content) : []

        handleSubmit({
            [`${name}Code`]: gaps?.map(item => item.code),
            [name]: `Từ ${convert100ToTarget(persent1)} - ${convert100ToTarget(persent2)} ${name === 'price'? 'triệu': 'm2'}`
        },e, {[`${name}Arr`]: [persent1, persent2]})
        // handleSubmit({
        //     [`${name}Code`]: [convert100ToTarget(persent1), convert100ToTarget(persent2)],
        //     [name]: `Từ ${convert100ToTarget(persent1)} - ${convert100ToTarget(persent2)} ${name === 'price'? 'triệu': 'm2'} +`
        // }, e)
    }

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                // setIsShowModal(true)
            }}
            className='w-2/5 bg-white rounded-md'>
            <div className='h-[45px] flex items-center px-4 border-b border-b-gray-200'>
                <span className='hover:text-[#f73859] cursor-pointer' onClick={(e) => {
                    e.stopPropagation()
                    setIsShowModal(false)
                }}>
                    <FaArrowLeft size={26} />
                </span>
            </div>
            {(name === 'category' || name === 'province') && <div className='p-4 flex flex-col'>
                {content?.map(item => (
                    <span className='flex gap-2 py-2 items-center border-b border-b-gray-200' key={item?.code}>
                        <input
                            type='radio'
                            id={item?.code}
                            name={name}
                            checked={item.code === queries[`${name}Code`] ? true : false}
                            value={item?.code}
                            onClick={(e) => handleSubmit({ [name]: item.value, [`${name}Code`]: item.code }, e)} />
                        <label htmlFor={item?.label}>{item?.value}</label>
                    </span>
                ))}
            </div>}
            {(name === 'price' || name === 'area') && <div className='p-4 py-20'>
                <div className='flex flex-col items-center justify-center relative'>
                    <div className='absolute z-30 top-[-48px] font-bold text-xl text-orange-500'>
                        {`${(persent1 === 100 && persent2 === 100)
                            ? `Trên ${convert100ToTarget(persent1)}`
                            : `Từ ${persent1 <= persent2
                                ? convert100ToTarget(persent1)
                                : convert100ToTarget(persent2)} - ${persent2 >= persent1
                                    ? convert100ToTarget(persent2)
                                    : convert100ToTarget(persent1)}`} ${name === 'price' ? 'triệu' : 'm2'} +`}
                    </div>
                    <div
                        onClick={handleClickTrack}
                        id='track'
                        className='slider-track cursor-pointer absolute top-0 bottom-0 w-full h-[5px] bg-gray-200 rounded-full'>
                    </div>
                    <div
                        onClick={handleClickTrack}
                        id='track-active' className='slider-track-active absolute top-0 bottom-0 h-[5px] bg-orange-500 rounded-full'>
                    </div>
                    <input
                        min='0'
                        max='100'
                        step='1'
                        type='range'
                        value={persent1}
                        onChange={(e) => {
                            setPersent1(+e.target.value)
                            activedEl && setActivedEl('')
                        }}
                        className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                    />
                    <input
                        min='0'
                        max='100'
                        step='1'
                        type='range'
                        value={persent2}
                        onChange={(e) => {
                            setPersent2(+e.target.value)
                            activedEl && setActivedEl('')
                        }}
                        className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                    />
                    <div className='absolute z-30 top-6 left-0 right-0 flex justify-between items-center px-2'>
                        <span
                            onClick={(e) => {
                                e.stopPropagation()
                                handleClickTrack(e, 0)
                            }}
                            className='ml-[-10px] cursor-pointer'>0</span>
                        <span
                            onClick={(e) => {
                                e.stopPropagation()
                                handleClickTrack(e, 100)
                            }}
                            className='mr-[-12px] cursor-pointer'>{name === 'price' ? '15 triệu+' : name === 'area' ? 'Trên 90m2' : ''}</span>
                    </div>
                </div>
                <div className=' mt-24'>
                    <h4 className='font-medium mb-4'>Chọn nhanh: </h4>
                    <div className='flex flex-wrap gap-1 items-center w-full'>
                        {content?.map(item => (
                            <button
                                onClick={() => {
                                    handlePrice(item.code, item.value)
                                }}
                                className={`px-6 py-2 m-1 text-[14px] rounded-md cursor-pointer ${item.code === activedEl ? 'bg-blue-500 text-white' : 'bg-gray-100 '}`}
                                key={item.code}>
                                {item.value}
                            </button>
                        ))}
                    </div>

                </div>
            </div>}
            {(name === 'price' || name === 'area') && <button
                className='w-full py-2 bg-[#ffa500] font-medium justify-center rounded-none rounded-bl-md rounded-br-md'
                onClick={handleBeforeSubmit}
            >
                ÁP DỤNG
            </button>}
        </div>
    )
}

export default memo(PopupFilter)