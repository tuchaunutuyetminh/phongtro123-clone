import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navigation } from '../../components'

const Home = () => {
  return (
    <div className='w-full h-full'>
        <Header />
        <Navigation />
        <div className='w-1100 flex flex-col items-center justify-center'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home