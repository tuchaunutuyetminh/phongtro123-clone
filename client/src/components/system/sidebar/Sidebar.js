import React from 'react'
import avatar from '../../../assests/images/avatarDefault.png'
import { useSelector } from 'react-redux'
import { menuSidebar } from '../../../utils/constants'
import { Link, NavLink } from 'react-router-dom'
import { IoMdLogOut } from 'react-icons/io'
import { logout } from '../../../store/auth/authSlice'
import { resetCurrent } from '../../../store/user/userSlice'
import Swal from 'sweetalert2'

const activeStyle = 'hover:bg-gray-200 p-2 rounded-md gap-2 flex items-center font-bold bg-gray-200'
const notActiveStyle = 'hover:bg-gray-200 p-2 rounded-md gap-2 flex items-center'
const Sidebar = ({ dispatch }) => {
  const { currentData } = useSelector(state => state.user)
  const handleLogout = () => {
    Swal.fire({
      title: 'Bạn muốn đăng xuất',
      text: 'Nhấn oke để tiếp tục.',
      icon: 'info',
      showCancelButton: true,
      showConfirmButton: true
    }).then(rs => {
      if (rs.isConfirmed) {
        dispatch(logout())
        dispatch(resetCurrent({ currentData: {} }))
      }
    })
  }
  return (
    <div className='w-[256px] h-full flex-none p-4 flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <img src={avatar} alt='avatar' className='w-12 h-12 object-cover rounded-full border-2 border-white' />
          <div className='flex flex-col justify-center'>
            <span className='font-semibold'>{currentData?.name}</span>
            <small>{currentData?.phone}</small>
          </div>
        </div>
        <span>Mã thành viện: <span className='font-semibold'>{currentData?.id?.match(/\d/g).join('').slice(5, 11)}</span></span>
      </div>
      <div>
        {menuSidebar.map(item => (
          <NavLink className={({isActive}) => isActive ? activeStyle : notActiveStyle} to={item?.path} key={item.id}>
            {item?.icon}
            {item.text}
          </NavLink>
        ))}
        <span onClick={handleLogout} className='hover:bg-gray-200 p-2 rounded-md gap-2 flex items-center cursor-pointer'>
          <IoMdLogOut />
          Đăng xuất
        </span>
      </div>
    </div>
  )
}

export default Sidebar