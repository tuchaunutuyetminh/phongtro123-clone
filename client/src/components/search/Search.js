import React from 'react'
import { Button, SearchItem } from '../../components'
import icons from '../../utils/icons'
const {BsChevronRight, IoMdSearch ,CiLocationOn, IoMdCrop, TbReportMoney, MdOutlineOtherHouses} = icons
const Search = () => {
  return (
    <div className='h-[55px] p-[10px] bg-[#febb02] w-3/5 rounded-lg flex items-center gap-2'>
        <SearchItem text='Phòng trọ, nhà trọ' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<MdOutlineOtherHouses />} fontWeight/>
        <SearchItem text='Toàn quốc' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<CiLocationOn />}/>
        <SearchItem text='Chọn giá' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<TbReportMoney />}/>
        <SearchItem text='Chọn diện tích' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<IoMdCrop />}/>
        <Button
          type='button'
          style='bg-[#0071c2] py-2 px-4 w-full rounded-md font-medium text-white text-sm flex items-center justify-center'
        >
          <IoMdSearch color='white' />
        Tìm kiếm
      </Button>
    </div>
  )
}

export default Search