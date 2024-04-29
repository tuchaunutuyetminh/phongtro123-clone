import React, { useEffect, useState } from 'react'
import icons from '../../utils/icons'
import { convert100to15 } from '../../utils/helper'
const { FaArrowLeft } = icons
const PopupFilter = ({ setIsShowModal, content, name }) => {
    const [persent1, setPersent1] = useState(0)
    const [persent2, setPersent2] = useState(100)
    useEffect(() => {
        const activedTrackEl = document.getElementById('track-active')
        if (persent2 <= persent1) {
            activedTrackEl.style.left = `${persent2}%`
            activedTrackEl.style.right = `${100 - persent1}%`
        } else {
            activedTrackEl.style.left = `${persent1}%`
            activedTrackEl.style.right = `${100 - persent2}%`
        }
    }, [persent1, persent2])

    const handleClickTrack = (e) => {
        e.stopPropagation()
        const stackEl = document.getElementById('track')
        const stackRect = stackEl.getBoundingClientRect()
        let percent = Math.round((e.clientX - stackRect.left) * 100 / stackRect.width)

        if (Math.abs(percent - persent1) <= (Math.abs(percent - persent2))) {
            setPersent1(percent)
        } else {
            setPersent2(percent)

        }
    }
    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                setIsShowModal(true)
            }}
            className='w-1/3 bg-white rounded-md'>
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
                        <input type='radio' id={item?.code} name={name} value={item?.code} />
                        <label htmlFor={item?.label}>{item?.value}</label>
                    </span>
                ))}
            </div>}
            {(name === 'price' || name === 'area') && <div className='p-12 py-20'>
                <div className='flex flex-col items-center justify-center relative'>
                    <div className='absolute z-30 top-[-48px] font-bold text-xl text-orange-500'>{`Từ ${persent1 <= persent2 ? convert100to15(persent1) : convert100to15(persent2)} - ${persent2 >= persent1 ? convert100to15(persent2) : convert100to15(persent1)} triệu`}</div>
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
                        onChange={(e) => setPersent1(+e.target.value)}
                        className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                    />
                    <input
                        min='0'
                        max='100'
                        step='1'
                        type='range'
                        value={persent2}
                        onChange={(e) => setPersent2(+e.target.value)}
                        className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                    />
                    <div className='absolute z-30 top-6 left-0 right-0 flex justify-between items-center px-2'>
                        <span className='ml-[-10px]'>0</span>
                        <span className='mr-[-12px]'>15 triệu+</span>
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default PopupFilter