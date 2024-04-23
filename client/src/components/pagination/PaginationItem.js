import React, { memo } from 'react'
import {createSearchParams} from 'react-router-dom'
import withBaseComponent from '../../hocs/withBaseComponent'
import clsx from 'clsx'

const notActive = 'w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-300 rounded-md'
const active = 'w-[46px] h-[48px] flex justify-center items-center bg-[#e13427] hover:opacity-90 text-white rounded-md '
const PaginationItem = ({text,icon, navigate, currentPage, setCurrentPage}) => {

  const handleChangePage = () => { 
    if(!(text === '...')) {
      setCurrentPage(+text)
      navigate({
        pathname: "",
        search: createSearchParams({
          page: text
        }).toString()
      })
    }
  }
  return (
    <div 
      onClick={handleChangePage}
      className={+text === +currentPage ? `${active} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}}` : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`}>
        {icon || text}
    </div>
  )
}

export default withBaseComponent(memo(PaginationItem))