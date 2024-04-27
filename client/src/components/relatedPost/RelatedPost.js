import React, { useEffect, useState } from 'react'
import { SmallItem } from '../../components'
import { apiGetNewPosts } from '../../services/post'

const RelatedPost = ({ title }) => {
  const [newPosts, setNewPosts] = useState([])

  const fetchNewPosts = async () => {
    const response = await apiGetNewPosts()
    if (response.err === 0) {
      setNewPosts(response.response)
    }
  }

  useEffect(() => {
    fetchNewPosts()
  }, [])
  console.log(newPosts)
  return (
    <div className='p-4 rounded-md bg-white w-full'>
      <h3 className='text-lg font-semibold mb-4'>Tin mới đăng</h3>
      <div className='w-full flex flex-col gap-2'>
        {newPosts?.length > 0 && newPosts.map(item => (
          <SmallItem
            key={item?.id}
            image={JSON.parse(item.images.image)}
            title={item?.title}
            price={item?.attributes?.price} 
            createdAt={item.createdAt} />
        ))}
      </div>
    </div>
  )
}

export default RelatedPost