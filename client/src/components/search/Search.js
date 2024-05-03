import React, { useCallback, useEffect, useState } from 'react'
import { Button, Modal, PopupFilter, SearchItem } from '../../components'
import icons from '../../utils/icons'
import { useSelector } from 'react-redux'
import withBaseComponent from '../../hocs/withBaseComponent'
import { path } from '../../utils/constants'
import { createSearchParams } from 'react-router-dom'
const { BsChevronRight, IoMdSearch, CiLocationOn, IoMdCrop, TbReportMoney, MdOutlineOtherHouses } = icons

const Search = ({ navigate, location }) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [content, setContent] = useState([])
  const [name, setName] = useState('')
  const [queries, setQueries] = useState({})
  const [arrMinMax, setArrMinMax] = useState({})
  const { provinces } = useSelector(state => state.provinces)
  const { areas } = useSelector(state => state.areas)
  const { prices } = useSelector(state => state.prices)
  const { categoriesData } = useSelector(state => state.app)

  const handleShowModal = (content, name, location) => {
    setContent(content)
    setIsShowModal(true)
    setName(name)
  }

  const handleSubmit = useCallback((query, e, arrMinMax) => {
    e.stopPropagation()
    setQueries(prev => ({ ...prev, ...query }))
    setIsShowModal(false)
    arrMinMax && setArrMinMax(prev => ({ ...prev, ...arrMinMax }))
  }, [isShowModal, queries])

  const handleSearch = () => {
    const queryCodes = Object.entries(queries).filter(item => item[0].includes('Code')).filter(item => item[1])
    let queryCodesObject = {}
    queryCodes.forEach(i => {
      queryCodesObject[i[0]] = i[1]
    })
    const queryText = Object.entries(queries).filter(item => !item[0].includes('Code')).filter(item => item[1])

    console.log(queryText)
    let queryTextObj = {}
    queryText.forEach(item => {queryTextObj[item[0]] = item[1]})
    let titleSearch = `${queryTextObj.category ? queryTextObj.category : 'Cho thuê tất cả'} ${queryTextObj.province ? `tỉnh ${queryTextObj.province}` : ''} ${queryTextObj.price ? `giá ${queryTextObj.price}` : ''} ${queryTextObj.area ? `diện tích ${queryTextObj.area}` : ''} `
    
    navigate({
      pathname: path.SEARCH,
      search: createSearchParams(queryCodesObject).toString(),
      
    }, {state: { titleSearch}})

    //reset 
  }
  useEffect(() => { 
    if(!location.pathname.includes(path.SEARCH)) setQueries({})
   },[location])

  return (
    <>
      <div className='h-[55px] p-[10px] bg-[#febb02] w-3/5 rounded-lg flex items-center gap-2'>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(categoriesData, 'category')}>
          <SearchItem
            setQueries={setQueries}
            setArrMinMax={setArrMinMax}
            name={'category'}

            text={queries.category}
            defaultText='Tìm tất cả'
            IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<MdOutlineOtherHouses />} />
        </span>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(provinces, 'province')}>
          <SearchItem
            setQueries={setQueries}
            setArrMinMax={setArrMinMax}
            name={'province'}
            text={queries.province}
            defaultText='Toàn quốc'
            IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<CiLocationOn />} />
        </span>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(prices, 'price')}>
          <SearchItem
            setQueries={setQueries}
            setArrMinMax={setArrMinMax}
            name={'price'}
            text={queries.price}
            defaultText='Chọn giá'
            IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<TbReportMoney />} />
        </span>
        <span className='flex-1 cursor-pointer' onClick={() => handleShowModal(areas, 'area')}>
          <SearchItem 
            setQueries={setQueries}
            setArrMinMax={setArrMinMax}
            name={'area'} 
            text={queries.area} 
            defaultText='Chọn diện tích' 
            IconAfter={<BsChevronRight color='rgba(156,163, 175)' />} IconBefore={<IoMdCrop />} />
        </span>
        <Button
          type='button'
          handleOnclick={handleSearch}
          style='bg-[#0071c2] py-2 px-4 flex-1 rounded-md font-medium text-white text-sm flex items-center justify-center'
        >
          <IoMdSearch color='white' />
          Tìm kiếm
        </Button>
      </div>
      {isShowModal && <Modal setIsShowModal={setIsShowModal}>
        <PopupFilter
          queries={queries}
          arrMinMax={arrMinMax}
          handleSubmit={handleSubmit}
          content={content}
          setIsShowModal={setIsShowModal}
          name={name} />
      </Modal>}
    </>
  )
}

export default withBaseComponent(Search)