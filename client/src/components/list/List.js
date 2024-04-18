import React, { memo, useEffect, useState } from 'react'
import { leadHeading } from '../../utils/constants'
import {Button, Item} from '../../components'
import withBaseComponent from '../../hocs/withBaseComponent'
import { getPosts } from '../../store/post/asyncActions'
import { useSelector } from 'react-redux'
import { apiGetPostsLimit } from '../../services/post'

const List = ({dispatch}) => {
  // const {posts} = useSelector(state => state.posts)
  const [page, setPage] = useState(0)
  const [countPost, setCountPost] = useState(0)
  const [postsLimit, setPostLimit] = useState([])
  const fetchPosts = async(page) => { 
    const response = await apiGetPostsLimit(page)
    if(response.err === 0) {
      setCountPost(response.response.count)
      setPostLimit(response.response.rows)
    }
   }
  useEffect(() => {
    fetchPosts(1)
  },[])
  console.log(countPost)
  
  return (
    <div className='w-full border border-blue-600 p-2 rounded-md bg-white shadow-md'>
        <div className='flex items-center justify-between my-3'>
            <h4 className=' text-lg font-semibold'>{leadHeading}</h4>
            <span>Cập nhật ngày: 7:40 4/4/2024</span>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <span>Sắp xếp: </span>
            <Button style='bg-gray-200 text-black' type='button'>mặc định</Button>
            <Button style='bg-gray-200 text-black' type='button'>mới nhất</Button>
        </div>
        <div className='items'>
            {postsLimit?.length > 0 && postsLimit.map(item => (
              <Item key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default withBaseComponent(memo(List))