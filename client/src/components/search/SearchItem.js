import React, { memo } from 'react'
import clsx from 'clsx'
const SearchItem = ({ IconBefore, IconAfter, text, fontWeight }) => {
    return (
        <div className='bg-white py-2 px-4 w-full rounded-md text-gray-400 text-[13.3px] flex justify-between items-center'>
            <div className='flex items-center w-full'>
                {IconBefore}
                <span className={clsx('w-full overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap', fontWeight && 'font-medium text-black')}>{text}</span>
            </div>
            {IconAfter}
        </div>
    )
}

export default memo(SearchItem)