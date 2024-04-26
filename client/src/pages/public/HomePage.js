import React, { useEffect } from 'react'
import { ItemSidebar, List, Pagination, Province } from '../../components'
import { text } from '../../utils/constants'
import withBaseComponent from '../../hocs/withBaseComponent'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getPrices } from '../../store/prices/asyncActions'
import { getAreas } from '../../store/areas/asyncActions'
import { getPostsLimit } from '../../store/post/asyncActions'

const HomePage = () => {


  const { categoriesData } = useSelector(state => state.app)
  const {prices} = useSelector(state => state.prices)
  const {areas} = useSelector(state => state.areas)


  useEffect(() => { 
   
   },[])
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='flex flex-col justify-center gap-2'>
        <h1 className='font-bold text-[28px]'>{text.HOME_TITLE}</h1>
        <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List />
          <Pagination  />
        </div>

        <div className='w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center'>
          <ItemSidebar content={categoriesData} title='Danh mục cho thuê'/>
          <ItemSidebar title='Xem theo giá' content={prices} isDoubleItem type='priceCode' />
          <ItemSidebar title='Xem theo diện tích' isDoubleItem content={areas} type="areaCode"/>
        </div>
      </div>
    </div>
  )
}

export default withBaseComponent(HomePage)