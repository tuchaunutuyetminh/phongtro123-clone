import React from 'react'
import Navigation from '../../navigation/Navigation'

function Header({}) {
    return (
        <div className='w-full flex flex-none h-[40px]'>
            <div className='flex leading-40 justify-center items-center font-bold bg-secondary1 text-white w-[256px] flex-none'>
                Phongtro123.com
            </div>
            <div className='flex-auto'>
                <Navigation isAdmin/>
            </div>
        </div>
    )
}

export default Header