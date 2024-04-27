import React from 'react'
import { text } from '../../utils/dataContact'
import Button from '../buttons/Button'

const Contact = () => {
  return (
    <div className='bg-white rounded-md shadow-md w-3/5 p-4 flex flex-col items-center justify-center'>
        <img 
            src={text.image}
            alt='thumbnail'
            className='w-full h-48 object-cover'
        />
        <p>{text.content}</p>
        <div className='flex items-center justify-around w-full py-5'>
            {text.contacts.map((item, idx) => (
                <div className='flex flex-col items-center'>
                    <span className='text-orange-700 font-semibold'>{item.text}</span>
                    <span className='text-blue-800 font-semibold text-[22px]'>{item.phone}</span>
                    <span className='text-blue-800 font-semibold text-[22px]'>{item.zalo}</span>
                </div>
            ))}
        </div>
        <Button
            style='text-white bg-secondary1'
        >
            Gửi liên hệ
        </Button>
    </div>
  )
}

export default Contact