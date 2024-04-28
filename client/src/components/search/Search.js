import React, { useState } from 'react'
import { Button, Modal, PopupFilter, SearchItem } from '../../components'
import icons from '../../utils/icons'
import { useSelector } from 'react-redux'
const { BsChevronRight, IoMdSearch, CiLocationOn, IoMdCrop, TbReportMoney, MdOutlineOtherHouses } = icons

const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [content, setContent] = useState([])
  const [name, setName] = useState('')

  const {provinces} = useSelector(state => state.provinces)
  const {areas} = useSelector(state => state.areas)
  const {prices} = useSelector(state => state.prices)
  const {categoriesData} = useSelector(state => state.app)

  const handleShowModal = (content, name) => { 
    setContent(content)
    setIsShowModal(true)
    setName(name)
  }


  return (
    <>
      <div className='h-[55px] p-[10px] bg-[#febb02] w-3/5 rounded-lg flex items-center gap-2'>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(categoriesData, 'category')}>
          <SearchItem text='Phòng trọ, nhà trọ' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<MdOutlineOtherHouses />} fontWeight />
        </span>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(provinces, 'province')}>
          <SearchItem text='Toàn quốc' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<CiLocationOn />} />
        </span>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(prices, 'price')}>
          <SearchItem text='Chọn giá' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<TbReportMoney />} />
        </span>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(areas, 'area')}>
          <SearchItem text='Chọn diện tích' IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<IoMdCrop />} />
        </span>
        <Button
          type='button'
          style='bg-[#0071c2] py-2 px-4 flex-1 rounded-md font-medium text-white text-sm flex items-center justify-center'
        >
          <IoMdSearch color='white' />
          Tìm kiếm
        </Button>
      </div>
      {isShowModal && <Modal setIsShowModal={setIsShowModal}>
        <PopupFilter content={content} setIsShowModal={setIsShowModal} name={name}/>
      </Modal>}
    </>
  )
}

export default Search