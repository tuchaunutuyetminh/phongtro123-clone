import React, { useEffect, useState } from 'react'
import { PaginationItem } from '../../components'
import { useSelector } from 'react-redux'
import icons from '../../utils/icons'
import { useSearchParams } from 'react-router-dom'

const {FaArrowRight, FaArrowLeft} = icons
const Pagination = () => {

  const {count, allPost} = useSelector(state => state.posts)
  const [arrPage, setArrPage] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [isHideEnd, setIsHideEnd] = useState(false)
  const [isHideStart, setIsHideStart] = useState(false)

  const [searchParams] = useSearchParams()

  useEffect(() => { 
    let page = searchParams.get('page')

    page && +page !== currentPage && setCurrentPage(+page)
    !page && setCurrentPage(1)
   },[searchParams])


  useEffect(() => { 
    let maxPage = Math.ceil(count / process.env.REACT_APP_LIMIT_POST)
    let end = (currentPage + 2) > maxPage ? maxPage : (currentPage + 2)
    let start = (currentPage - 2) <= 1  ? 1 : (currentPage - 2)
    let temp = []
    for(let i = start; i <=end; i++) temp.push(i)
    setArrPage(temp)

    currentPage >= (maxPage - 2) ? setIsHideEnd(true) : setIsHideEnd(false)
    currentPage <= 3 ? setIsHideStart(true) : setIsHideStart(false)
    
  }, [count, allPost, currentPage])
  return (
    <div className='w-full flex items-center justify-center gap-2 py-5'>
      {!isHideStart && <PaginationItem text={1} setCurrentPage={setCurrentPage}/>}
      {(!isHideStart && currentPage !== 4) && <PaginationItem text={'...'} />}
      
      {arrPage?.length > 0 && arrPage.map((item, i) => (
        <PaginationItem 
          key={item} text={item} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
      {!isHideEnd && <PaginationItem text={'...'} />}
      {!isHideEnd && <PaginationItem icon={<FaArrowRight />} text={Math.ceil(count / process.env.REACT_APP_LIMIT_POST)} setCurrentPage={setCurrentPage}/>}
      
    </div>
  )
}

export default Pagination