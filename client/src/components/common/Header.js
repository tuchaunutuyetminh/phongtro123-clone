import React from 'react'
import logo from '../../assests/images/logoWithoutbg.png'
import Button from './Button'

import icons from '../../utils/icons'

const {FiPlusCircle} = icons
const Header = () => {
  return (
    <div className='w-1100 m-auto flex items-center justify-between border border-red-300'>
      <img src={logo} alt='logo' className='w-[240px] object-cover'/>
    
      <div className='flex items-center gap-2'>
        <small>Phongtro123.com xin chào !</small>
        <Button style='text-white bg-[#3961fb]' type='button'>Đăng nhập</Button>
        <Button style='text-white bg-[#3961fb]' type='button'>Đăng ký</Button>
        <Button style='text-white bg-secondary2' type='button'>
          Đăng tin mới
          <span>
          <FiPlusCircle />
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Header