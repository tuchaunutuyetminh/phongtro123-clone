import React from 'react'
import { useSelector } from 'react-redux'
import avatar from '../../assests/images/avatarDefault.png'

const User = () => {
    const {currentData} = useSelector(state => state.user)
    return (
        <div className='flex items-center text-[12px] gap-2'>
            <img src={currentData?.avatar || avatar} alt='avatar' className='w-10 object-cover rounded-full h-10 border-3 shadow-md border-white'/>
            <div className='flex flex-col'>
                <span className='inline'>Xin chào, <span className='font-semibold '>{currentData?.name}</span></span>
                <span className='inline-block'>Mã tài khoản: <span className='w-20 inline'>{currentData?.id?.match(/\d/g).join('').slice(5,11)}</span></span>
            </div>
        </div>
    )
}

export default User