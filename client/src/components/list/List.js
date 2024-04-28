import React, { memo, useEffect } from 'react'
import { leadHeading } from '../../utils/constants'
import { Button, Item, Pagination } from '../../components'
import withBaseComponent from '../../hocs/withBaseComponent'
import { useSelector } from 'react-redux'
import { getPostsLimit } from '../../store/post/asyncActions'
import { useSearchParams } from 'react-router-dom'


const List = ({ dispatch, categoryCode }) => {
  const { allPost } = useSelector(state => state.posts)
  const [searchParams] = useSearchParams()
  useEffect(() => {
    let params = []
    for(let entry of searchParams.entries()) {
      params.push(entry)
    }
    let data = {}
    params?.map(i => {data = { ...data, [i[0]]: i[1] }})
    if(categoryCode) {
      data.categoryCode = categoryCode
    }

    // call api
    dispatch(getPostsLimit(data))
  }, [searchParams, categoryCode])
  return (
    <div className='w-full p-2 rounded-md bg-white shadow-md'>
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
          <Item key={item.id} item={item} />
        ))}
      </div>
      {/* <Pagination length={allPost.length}/> */}
    </div>
  )
}

export default withBaseComponent(memo(List))