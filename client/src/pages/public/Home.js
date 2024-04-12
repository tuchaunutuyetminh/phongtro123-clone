import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navigation, Search } from '../../components'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col items-center gap-3'>
        <Header />
        <Navigation />
        <Search />
        <div className='lg:w-3/5 w-4/5 flex flex-col items-center justify-center'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home