import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components'

const Public = () => {
  return (
    <div className='w-full h-full'>
        <Header />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Public