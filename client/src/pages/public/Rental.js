import React, { useState, useEffect } from 'react'
import { ItemSidebar, List, Pagination, Province, RelatedPost } from '../../components'
import { text } from '../../utils/constants'
import withBaseComponent from '../../hocs/withBaseComponent'
import { useSelector } from 'react-redux'
import { formatVietnameseToString } from '../../utils/helper'
import { getPostsLimit } from '../../store/post/asyncActions'

const Rental = ({ location, dispatch }) => {
  const { categoriesData } = useSelector(state => state.app)
  const { prices } = useSelector(state => state.prices)
  const { areas } = useSelector(state => state.areas)
  const [categoryCode, setcategoryCode] = useState('')
  const [categoryCurrent, setcategoryCurrent] = useState({})
  
  useEffect(() => {
    const category = categoriesData?.find(item => `/${formatVietnameseToString(item.value)}` === location?.pathname)
    setcategoryCurrent(category)
    if (category) {
      setcategoryCode(category.code)
    }
  }, [location])
  return (

    <div className='w-full flex flex-col gap-2'>
      <div className='flex flex-col justify-center gap-2'>
        <h1 className='font-bold text-[28px]'>{categoryCurrent?.header}</h1>
        <p className='text-base text-gray-700'>{categoryCurrent?.subheader}</p>
      </div>
      <Province />
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List categoryCode={categoryCode} />
          <Pagination />
        </div>

        <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
          <ItemSidebar title='Xem theo giá' content={prices} isDoubleItem type='priceCode' />
          <ItemSidebar title='Xem theo diện tích' isDoubleItem content={areas} type="areaCode" />
          <RelatedPost />
        </div>
      </div>
    </div>
  )
}

export default withBaseComponent(Rental)