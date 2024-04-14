import React from 'react'
import { List, Province } from '../../components'
import { text, location } from '../../utils/constants'

const HomePage = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='flex flex-col justify-center gap-2'>
        <h1 className='font-bold text-[28px]'>{text.HOME_TITLE}</h1>
        <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List />
        </div>
        <div className='w-[30%] border border-green-500'>
          Sidebar
        </div>
      </div>
    </div>
  )
}

export default HomePage