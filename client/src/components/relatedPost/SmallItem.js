import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'
const SmallItem = ({title, price, image, createdAt}) => {
  return (
    <div className='w-full flex items-center gap-2 py-2 border-b border-b-gray-300'>
        <img 
            className='flex-none w-[65px] h-[65px] object-cover rounded-sm'
            src={image[0]} alt='ảnh'/>
        <div className='flex flex-col flex-auto justify-between gap-2'>
            <h4 className='text-blue-500 text-[14px] capitalize'>{`${title?.toLowerCase().slice(0,45)}...`}</h4>
            <div className='flex items-center gap-1 w-full'>
                <span className='font-medium text-green-500 text-[12px] w-[90px]'>{`${price.slice(0,10)}...`}</span>
                <span className='text-gray-400 text-[12px]'>{moment(createdAt).fromNow()}</span>
            </div>
        </div>
    </div>
  )
}

export default SmallItem