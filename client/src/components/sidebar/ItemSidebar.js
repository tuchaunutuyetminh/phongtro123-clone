import React, { memo } from 'react'
import icons from '../../utils/icons'

const { BsChevronRight } = icons
const ItemSidebar = ({ content, title, isDoubleItem }) => {

    const formatContent = () => {
        const oddEl = content?.filter((item, index) => index % 2 !== 0)
        const evenEl = content?.filter((item, index) => index % 2 === 0)
        const formatedContent = oddEl?.map((item, index) => {
            return {
                left: item,
                right: evenEl?.find((item2, index2) => index2 === index)
            }
        })

        return formatedContent
    }

    console.log(formatContent())
    return (
        <div className='p-4 rounded-md bg-white w-full'>
            <h3 className='text-lg font-semibold mb-4'>{title}</h3>
            {isDoubleItem && <div className='flex flex-col gap-2'>
                {content?.length > 0 && formatContent(content).map((item, index) => (
                    <div className='' key={index}>
                        <div className='flex items-center justify-around'>
                            <div className='flex gap-2 items-center cursor-pointer hover:text-[#f60] border-b border-b-gray-200 pb-1 border-dashed flex-1'>
                                <BsChevronRight size={12} color='#bebebe' />
                                <p className='text-[14px]'>{item.right.value}</p>
                            </div>

                            <div className='flex gap-2 items-center cursor-pointer hover:text-[#f60] border-b border-b-gray-200 pb-1 border-dashed flex-1'>
                                <BsChevronRight size={12} color='#bebebe' />
                                <p className='text-[14px]'>{item.left.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>}

            {!isDoubleItem && <div className='flex flex-col gap-2'>
                {content?.length > 0 && content?.map((item, index) => (
                    <div className='flex gap-2 items-center cursor-pointer hover:text-[#f60] border-b border-b-gray-200 pb-1 border-dashed flex-1' key={index}>
                        <BsChevronRight size={12} color='#bebebe' />
                        <p className='text-[14px]'>{item.value}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default memo(ItemSidebar)