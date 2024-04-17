import React, { memo, useState } from 'react'
import icons from '../../utils/icons'
import Button from '../buttons/Button'
const indexs = [0,1,2,3]

const { IoIosStar, IoIosHeart, IoIosHeartEmpty, BsBookmarkStarFill } = icons

const Item = ({item}) => {
    const {images, description,attributes, star,address,title, user } = item
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    return (
        <div className='w-full flex border-t border-orange-600 py-4'>
            <div className='w-2/5 flex flex-wrap gap-[6px] relative cursor-pointer'>
                {JSON.parse(images.image).length > 0 && JSON.parse(images.image).filter((i, index) => indexs.some(i => i === index))?.map((img, index) => (
                    <img key={index} src={img} alt='preview' className='w-[110px] h-[100px] object-cover' />
                ))}
                <span className="bg-overlay text-[13px] text-white px-2 rounded-md absolute left-1 bottom-1">{`${images?.image?.length} ảnh`}</span>
                <span 
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}
                    className="text-white absolute right-5 bottom-1">
                    {isHoverHeart ? <IoIosHeart size={26} color='red'/> : <IoIosHeartEmpty size={26} />}
                </span>
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between w-full'>
                    <div className='text-red-500 font-medium line-clamp-2 text-ellipsis'>
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        {title}
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill color='orange' size={24} />
                    </div>
                </div>
                <div className='my-1 flex items-center justify-between gap-1'>
                    <span className='font-bold text-[#16c784]'>{attributes?.price}</span>
                    <span className='text-[13px]'>{attributes?.acreage}</span>
                    <span className='line-clamp-2 text-ellipsis'>{address}</span>
                </div>
                <p className='text-gray-600 w-full line-clamp-2 text-ellipsis'>
                    {JSON.parse(description)}
                </p>
                <div className='flex items-center my-1 justify-between'>
                    <div className='flex items-center'>
                        <img src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt='avatar' className='w-[30px] h-[30px] object-cover rounded-full'/>
                        <p>{user?.name}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button style='bg-blue-700 text-white text-[13px]'>{`Gọi ${user.phone}`}</Button>
                        <Button style='border border-blue-500'>Nhắn zalo</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)
