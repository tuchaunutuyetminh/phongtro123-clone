import React, { useCallback, useEffect, useRef, useState } from 'react'
import logo from '../../assests/images/logoWithoutbg.png'
import {Button, User} from '../../components'

import icons from '../../utils/icons'
import withBaseComponent from '../../hocs/withBaseComponent'
import { menuManage, path } from '../../utils/constants'
import { Link, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../../store/auth/authSlice'
import { resetCurrent } from '../../store/user/userSlice'

import Swal from 'sweetalert2'

const { FiPlusCircle, IoMdLogOut,BsChevronDown } = icons
const Header = ({ navigate, dispatch }) => {

  const [isShowMenu, setIsShowMenu] = useState(false)

  const { isLogged } = useSelector(state => state.auth)
  const { currentData } = useSelector(state => state.user)

  const [params] = useSearchParams()
  const headerRef = useRef()
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
      if(rs.isConfirmed) {
        dispatch(logout())
        dispatch(resetCurrent({currentData: {}}))
        setIsShowMenu(false)
      }
    })
   }

   useEffect(() => { 
    headerRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
   }, [params.get('page')])
  return (
    <div ref={headerRef} className='w-3/5 flex items-center justify-between'>
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
        {isLogged && <div className='flex items-center gap-3 relative'>
          <User />
          <Button
            style='text-white bg-blue-700 text-[14px]'
            type='button'
            handleOnclick={() => setIsShowMenu(prev => !prev)}
          >
            Quản lý tài khoản
            <BsChevronDown />
          </Button>
          {isShowMenu && <div className='absolute bg-white border top-full right-0 shadow-md rounded-md p-4 min-w-[220px] flex flex-col'>
            {menuManage.map(item => (
              <Link className='hover:text-orange-500 border-b border-b-gray-200 text-blue-500 py-2 flex items-center gap-1' to={item?.path} key={item.id}>
                {item?.icon}
                {item.text}
              </Link>
            ))}
            <span onClick={handleLogout} className='flex items-center gap-1 cursor-pointer hover:text-orange-500 pt-2 text-blue-500'>
            <IoMdLogOut />
              Đăng xuất
            </span>
          </div>}
        </div>}

        <Button style='text-white bg-secondary2 text-[14px]' type='button'>
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