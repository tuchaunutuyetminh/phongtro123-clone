import React from 'react'
import { ItemSidebar, List, Pagination, RelatedPost } from '../../components'
import withBaseComponent from '../../hocs/withBaseComponent'
import { useSelector } from 'react-redux'

const SearchDetail = ({ location }) => {
  const { prices } = useSelector(state => state.prices)
  const { areas } = useSelector(state => state.areas)
  
  
  return (

    <div className='w-full flex flex-col gap-2'>
      <div className='flex flex-col justify-center gap-2'>
        <h1 className='font-bold text-[28px]'>{location.state?.titleSearch || 'Kết quả tìm kiếm'}</h1>
        <p className='text-base text-gray-700'>{`${location.state?.titleSearch || ''}, phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu cực an ninh.`}</p>
      </div>
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List />
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

export default withBaseComponent(SearchDetail)