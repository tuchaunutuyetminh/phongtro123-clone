import React, { memo } from 'react'
import clsx from 'clsx'
import icons from '../../utils/icons'
const { FaDeleteLeft } = icons
const SearchItem = ({ IconBefore, IconAfter, text, fontWeight, defaultText, name, setArrMinMax, setQueries }) => {

    return (
        <div className='bg-white py-2 px-4 w-full rounded-md text-gray-400 text-[13.3px] flex justify-between items-center'>
            <div className='flex items-center w-full'>
                {IconBefore}
                <span className={clsx('w-full overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap', fontWeight && 'font-medium text-black', text ? "font-medium text-black" : '')}>{text || defaultText}</span>
            </div>
            {text ? <span
                onClick={(e) => {
                    e.stopPropagation()
                    if(name === 'price' || name === 'area') setArrMinMax(pre => ({
                        ...pre,
                        [`${name}Arr`]: [0, 100]
                    }))
                    setQueries(prev => ({
                        ...prev,
                        [name]: '',
                        [`${name}Code`]: null
                    }))
                }
            }
            >
                <FaDeleteLeft />
            </span> : <span>{IconAfter}</span>}
        </div>
    )
}

export default memo(SearchItem)