import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '../../utils/constants'
import { useSelector } from 'react-redux'
import { formatVietnameseToString } from '../../utils/helper'

const notActive = 'hover:bg-secondary2 py-2 px-4'
const active = 'hover:bg-secondary2 bg-secondary2 py-2 px-4'
const Navigation = () => {
    const { categoriesData } = useSelector(state => state.app)

    const [categories, setcategories] = useState([])
    useEffect(() => {
        setcategories(categoriesData)
    })
    return (
        <div className='w-full flex justify-center items-center bg-secondary1 text-white'>
            <div className='w-3/5 flex items-start text-sm font-medium'>
                <NavLink
                    className={({ isActive }) => isActive ? active : notActive}
                    to={`/`}>
                    Trang chủ
                </NavLink>
                {categories?.length > 0 && categories.map((item, index) => (
                    <NavLink
                        className={({ isActive }) => isActive ? active : notActive}
                        key={item.code} to={`/${formatVietnameseToString(item.value)}`}>
                        {item.value}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navigation