import React, { memo } from 'react'
import icons from '../../utils/icons'

const { BsChevronRight } = icons
const ItemSidebar = ({ content, title }) => {
    return (
        <div className='p-4 rounded-md bg-white w-full'>
            <h3 className='text-lg font-semibold mb-4'>{title}</h3>
            <div className='flex flex-col gap-2'>
                {content?.length > 0 && content.map(item => (
                    <div className='flex gap-2 items-center cursor-pointer hover:text-[#f60] border-b border-b-gray-200 pb-1 border-dashed' key={item.code}>
                        <BsChevronRight size={12} color='#bebebe' />
                        <p className='text-[14px]'>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(ItemSidebar)