import React from 'react'
import { ItemSidebar, List, Pagination, Province } from '../../components'
import { text } from '../../utils/constants'
import withBaseComponent from '../../hocs/withBaseComponent'
import { useSearchParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomePage = () => {
  
  
  const [params] = useSearchParams()
  const {categoriesData} = useSelector(state => state.app)
  
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='flex flex-col justify-center gap-2'>
        <h1 className='font-bold text-[28px]'>{text.HOME_TITLE}</h1>
        <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List page={params.get('page')}/> 
          <Pagination page={params.get('page')}/>
        </div>
          
        <div className='w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center'>
          <ItemSidebar content={categoriesData} title='Danh mục cho thuê'/>
          <ItemSidebar title='Xem theo giá' />
          <ItemSidebar title='Xem theo diện tích' />
        </div>
      </div>
    </div>
  )
}

export default withBaseComponent(HomePage)