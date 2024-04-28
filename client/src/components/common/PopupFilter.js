import React from 'react'
import icons from '../../utils/icons'
const { FaArrowLeft } = icons
const PopupFilter = ({setIsShowModal, content, name}) => {
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
                    <FaArrowLeft size={26}/>
                </span>
            </div>
            <div className='p-4 flex flex-col'>
                {content?.map(item => (
                    <span className='flex gap-2 py-2 items-center border-b border-b-gray-200' key={item?.code}>
                        <input type='radio' id={item?.code} name={name} value={item?.code}/>
                        <label htmlFor={item?.label}>{item?.value}</label>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default PopupFilter