import React, { useEffect, useState } from 'react'
import icons from '../../utils/icons'
const { FaArrowLeft } = icons
const PopupFilter = ({ setIsShowModal, content, name }) => {
    const [persent1, setPersent1] = useState(0)
    const [persent2, setPersent2] = useState(100)
    useEffect(() => { 
        const activedTrackEl = document.getElementById('track-active')
        activedTrackEl.style.left = `${persent1}%`
     },[persent1])

     useEffect(() => { 
        const activedTrackEl = document.getElementById('track-active')
        activedTrackEl.style.right = `${100 - persent2}%`
     },[persent2])
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
            {(name === 'price' || name === 'area') && <div className='p-4'>
                <div className='flex flex-col items-center justify-center relative'>
                <div className='slider-track absolute top-0 bottom-0 w-full h-[5px] bg-gray-200 rounded-full'></div>
                <div id='track-active' className='slider-track-active absolute top-0 bottom-0 h-[5px] bg-orange-500 rounded-full'></div>
                    <input
                        min='0'
                        max='100'
                        step='5'
                        type='range'
                        value={persent1}
                        onChange={(e) => setPersent1(e.target.value)}
                        className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                    />
                    <input
                        min='0'
                        max='100'
                        step='5'
                        type='range'
                        value={persent2}
                        onChange={(e) => setPersent2(e.target.value)}
                        className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                    />
                </div>
            </div>}
        </div>
    )
}

export default PopupFilter