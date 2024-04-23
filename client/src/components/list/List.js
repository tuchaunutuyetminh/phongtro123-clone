import React, { memo, useEffect } from 'react'
import { leadHeading } from '../../utils/constants'
import {Button, Item, Pagination} from '../../components'
import withBaseComponent from '../../hocs/withBaseComponent'
import { useSelector } from 'react-redux'
import { getPosts } from '../../store/post/asyncActions'

const List = ({page, dispatch}) => {
  const { allPost} = useSelector(state => state.posts)
  useEffect(() => {
    let offset = page ? +page - 1 : 0
    dispatch(getPosts(offset))
  }, [page])
  return (
    <div className='w-full border border-blue-600 p-2 rounded-md bg-white shadow-md'>
        <div className='flex items-center justify-between my-3'>
            <h4 className=' text-lg font-semibold'>{leadHeading}</h4>
            <span>Cập nhật ngày: 7:40 4/4/2024</span>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <span>Sắp xếp: </span>
            <Button style={'bg-gray-200 text-black'} type='button'>mặc định</Button>
            <Button style={'bg-gray-200 text-black'} type='button'>mới nhất</Button>
        </div>
        <div className='items'>
            {allPost?.length > 0 && allPost?.map(item => (
              <Item key={item.id} item={item}/>
            ))}
        </div>
        {/* <Pagination length={allPost.length}/> */}
    </div>
  )
}

export default withBaseComponent(memo(List))