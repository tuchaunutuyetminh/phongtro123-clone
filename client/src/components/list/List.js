import React from 'react'
import { leadHeading } from '../../utils/constants'
import {Button, Item} from '../../components'

const List = () => {
  return (
    <div className='w-full border border-blue-600 p-2 rounded-md bg-white shadow-md'>
        <div className='flex items-center justify-between my-3'>
            <h4 className=' text-lg font-semibold'>{leadHeading}</h4>
            <span>Cập nhật ngày: 7:40 4/4/2024</span>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <span>Sắp xếp: </span>
            <Button style='bg-gray-200 text-black' type='button'>mặc định</Button>
            <Button style='bg-gray-200 text-black' type='button'>mới nhất</Button>
        </div>
        <div className='items'>
            <Item />
        </div>
    </div>
  )
}

export default List