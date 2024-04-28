import React, { memo } from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom'
import withBaseComponent from '../../hocs/withBaseComponent'

const notActive = 'w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-300 rounded-md'
const active = 'w-[46px] h-[48px] flex justify-center items-center bg-[#e13427] hover:opacity-90 text-white rounded-md '
const PaginationItem = ({ text, icon, navigate, currentPage, setCurrentPage, location }) => {

  const [searchParams] = useSearchParams()
  let entries = searchParams.entries()

  const append = (entries) => {
    let params = []
    searchParams.append('page', +text)
    for (let entry of entries) {
      params.push(entry)
    }

    let a = {}
    params?.map(i => {
      a = { ...a, [i[0]]: i[1] }
    })

    return a
  }

  const handleChangePage = () => {
    if (!(text === '...')) {

      setCurrentPage(+text)
      navigate({
        pathname: location.pathname,
        search: createSearchParams(append(entries)).toString()
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