import React, { useCallback } from 'react'
import logo from '../../assests/images/logoWithoutbg.png'
import {Button} from '../../components'

import icons from '../../utils/icons'
import withBaseComponent from '../../hocs/withBaseComponent'
import { path } from '../../utils/constants'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../../store/auth/authSlice'
import Swal from 'sweetalert2'

const { FiPlusCircle } = icons
const Header = ({ navigate, dispatch }) => {
  const { isLogged } = useSelector(state => state.auth)
  

  const gotoLogin = useCallback((flag) => {
    navigate(`/${path.LOGIN}`, { state: { flag } })
  }, [])

  const handleLogout = () => { 
    Swal.fire({
      title: 'Bạn muốn đăng xuất',
      text: 'Nhấn oke để tiếp tục.',
      icon: 'info',
      showCancelButton: true,
      showConfirmButton: true
    }).then(rs => {
      if(rs.isConfirmed) dispatch(logout())
    })
   }
  return (
    <div className='w-3/5 flex items-center justify-between'>
      <Link to={`${path.HOME}`}>
        <img src={logo} alt='logo' className='w-[240px] object-cover' />
      </Link>
      <div className='flex items-center gap-2'>
        <small>Phongtro123.com xin chào !</small>
        {!isLogged && <div className='flex items-center gap-2'>
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
        </div>}

        {isLogged && <div className='flex items-center gap-2'>
          <small>Tên</small>
          <Button
            style='text-white bg-red-700'
            type='button'
            handleOnclick={handleLogout}
          >Đăng xuất</Button>
        </div>}
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