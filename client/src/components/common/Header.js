import React, { useCallback } from 'react'
import logo from '../../assests/images/logoWithoutbg.png'
import Button from './Button'

import icons from '../../utils/icons'
import withBaseComponent from '../../hocs/withBaseComponent'
import { path } from '../../utils/constants'
import { Link } from 'react-router-dom'

const { FiPlusCircle } = icons
const Header = ({ navigate }) => {
  const gotoLogin = useCallback((flag) => {
    navigate(`/${path.LOGIN}`, { state: { flag } })
  }, [])
  return (
    <div className='w-1100 flex m-auto items-center justify-between border border-red-300'>
      <Link to={`${path.HOME}`}>
        <img src={logo} alt='logo' className='w-[240px] object-cover' />
      </Link>
      <div className='flex items-center gap-2'>
        <small>Phongtro123.com xin chào !</small>
        <Button
          style='text-white bg-[#3961fb]'
          type='button'
          handleOnclick={() => gotoLogin(false)}
        >Đăng nhập</Button>
        <Button
          style='text-white bg-[#3961fb]'
          type='button'
          handleOnclick={() => gotoLogin(true)}
        >Đăng ký</Button>

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

export default withBaseComponent(Header)