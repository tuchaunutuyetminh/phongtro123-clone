import React, { useEffect, useState } from 'react'
import { PaginationItem } from '../../components'
import { useSelector } from 'react-redux'
import icons from '../../utils/icons'

const {FaArrowRight, FaArrowLeft} = icons
const Pagination = ({ page }) => {

  const {count, allPost} = useSelector(state => state.posts)
  const [arrPage, setArrPage] = useState()
  const [currentPage, setCurrentPage] = useState(+page)
  const [isHideEnd, setIsHideEnd] = useState(false)
  const [isHideStart, setIsHideStart] = useState(false)

  useEffect(() => { 
    let maxPage = Math.floor(count / allPost.length)
    console.log(currentPage)
    let end = (currentPage + 1) > maxPage ? maxPage : (currentPage + 1)
    let start = (currentPage - 1) <= 0  ? 1 : (currentPage - 1)
    let temp = []
    for(let i = start; i <=end; i++) temp.push(i)
    setArrPage(temp)

    currentPage >= (maxPage - 1) ? setIsHideEnd(true) : setIsHideEnd(false)
    currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false)
    
  }, [count, allPost, currentPage])
  return (
    <div className='flex items-center justify-end gap-2 py-5'>
      {!isHideStart && <PaginationItem icon={<FaArrowLeft />} text={1} setCurrentPage={setCurrentPage}/>}
      {!isHideStart && <PaginationItem text={'...'} />}
      
      {arrPage?.length > 0 && arrPage.map((item, i) => (
        <PaginationItem 
          key={item} text={item} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
      {!isHideEnd && <PaginationItem text={'...'} />}
      {!isHideEnd && <PaginationItem icon={<FaArrowRight />} text={Math.floor(count /allPost.length)} setCurrentPage={setCurrentPage}/>}
      
    </div>
  )
}

export default Pagination