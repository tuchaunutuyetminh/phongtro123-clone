import React, { memo } from 'react'
import icons from '../../utils/icons'
import Button from '../buttons/Button'
const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/1379ebdf-eda5-4ef8-bb22-7da1d19551f2_1658240490.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg"
]

const { IoIosStar, IoIosHeart, IoIosHeartEmpty, BsBookmarkStarFill } = icons

const Item = () => {
    return (
        <div className='w-full flex border-t border-orange-600 p-4'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center'>
                <img src={images[0]} alt='preview' className='w-[120px] h-[100px] object-cover' />
                <img src={images[1]} alt='preview' className='w-[120px] h-[100px] object-cover' />
                <img src={images[2]} alt='preview' className='w-[120px] h-[100px] object-cover' />
                <img src={images[3]} alt='preview' className='w-[120px] h-[100px] object-cover' />
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between gap-4 w-full'>
                    <div className='text-red-500 font-medium'>
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        <IoIosStar className='starItem' size={18} color='orange' />
                        Cho thuê căn hộ
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill color='orange' size={24} />
                    </div>
                </div>
                <div className='my-2 flex items-center justify-between'>
                    <span className='font-bold text-[#16c784]'>2.8 triệu/tháng</span>
                    <span>18m²</span>
                    <span>Quận Gò Vấp, Hồ Chí Minh</span>
                </div>
                <p className='text-gray-600 line-clamp-3 text-ellipsis'>
                FREE 100% TIỀN THUÊ THÁNG ĐẦU-Vị trí: Cuối đường số 20 Dương Quãng Hàm, rẻ phải (tòa nhà 5 lầu màu trắng). Gần trường Công nghiệp 4 (5 phút), Cao…
                </p>
                <div className='flex items-center my-3 justify-between'>
                    <div className='flex items-center'>
                        <img src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt='avatar' className='w-[30px] h-[30px] object-cover rounded-full'/>
                        <p>Tuệ Thu</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button style='bg-blue-700 text-white text-[13px]'>Gọi 123456</Button>
                        <Button style='border border-blue-500'>Nhắn zalo</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)
