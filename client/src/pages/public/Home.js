import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navigation, Search, Intro, Contact } from '../../components'
import { useSelector } from 'react-redux'
import withBaseComponent from '../../hocs/withBaseComponent'

const Home = () => {
  const { isLogged} = useSelector(state => state.auth)
  
  
  return (
    <div className='w-full h-full flex flex-col items-center gap-4'>
        <Header />
        <Navigation />
        {isLogged && <Search />}
        <div className='lg:w-3/5 w-4/5 flex flex-col items-center justify-center'>
            <Outlet />
        </div>
        <Intro />
        <Contact />
    </div>
  )
}

export default Home