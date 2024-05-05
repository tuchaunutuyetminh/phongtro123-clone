import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '../../utils/constants'
import { HeaderSystem, Sidebar } from '../../components/system'
const System = () => {
  const { isLogged} = useSelector(state => state.auth)

  if(!isLogged) return <Navigate to={`/${path.LOGIN}`} replace={true}/>
  return (
    <div className=' w-full h-screen flex flex-col items-center'>
      <HeaderSystem />
      <div className='flex w-full min-h-screen flex-auto'>
        <Sidebar />
        <div className='flex-auto bg-white p-4'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default System