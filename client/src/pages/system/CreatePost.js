import React, { useState } from 'react'
import { Address, Overview } from '../../components/system'
import { apiUploadImages } from '../../services/post'
import icons from '../../utils/icons'
import Swal from 'sweetalert2'
import { Button, Loading } from '../../components'
import { useSelector } from 'react-redux'
import { getCodesArea, getCodesPrice } from '../../utils/getCode'
import { current } from '@reduxjs/toolkit'

const { RiDeleteBin6Line, BsCameraFill } = icons
const CreatePost = () => {

  const [payload, setPayload] = useState({
    categoryCode: '',
    title: '',
    priceNumber: 0,
    areaNumber: 0,
    images: '',
    address: '',
    priceCode: '',
    areaCode: '',
    description: '',
    target: '',
    province: ''
  })
  const [imagesPreview, setImagesPreview] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { areas} = useSelector(state => state.areas)
  const { prices} = useSelector(state => state.prices)
  const { categoriesData} = useSelector(state => state.app)
  const { provinces} = useSelector(state => state.provinces)

  
  const { currentData } = useSelector(state => state.user)


  const handleFiles = async (e) => {
    e.stopPropagation();
    setIsLoading(true)
    let images = []
    let files = e.target.files

    let formData = new FormData()
    for (let i of files) {
      formData.append('file', i)
      formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)

      let response = await apiUploadImages(formData)
      if (response.status === 200) images = [...images, response.data?.secure_url]
    }
    setIsLoading(false)

    setImagesPreview(prev => [...prev, ...images])
    setPayload(prev => ({
      ...prev,
      images: [...prev.images, ...images]
    }))
  }
  const handleDeleteImage = (image) => {
    Swal.fire({
      title: 'Delete Image',
      text: 'Are you sure you want to delete ?',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Delete',
      icon: 'warning'
    }).then((rs) => {
      if (rs.isConfirmed) {
        setImagesPreview(prev => prev?.filter(item => item !== image))
        setPayload(prev => ({
          ...prev,
          images: prev?.images.filter(item => item !== image)
        }))
      }
    })

  }

  const handleSubmit = () => {
    let priceCodeArr = getCodesPrice(+payload.priceNumber / Math.pow(10, 6), prices, 1, 15)
    let priceCode = priceCodeArr[0]?.code

    let areaCodeArr = getCodesArea(+payload.areaNumber, areas, 1, 90)
    let areaCode = areaCodeArr[0]?.code

    let finalPayload = {
      ...payload, 
      areaCode, 
      priceCode: +payload.priceNumber / Math.pow(10, 6), 
      userId: currentData.id,
      target: payload.target || 'Tất cả',
      label: `${categoriesData?.find(item => item.code === payload?.categoryCode)?.value} ${payload?.address?.split(',')[0]} `
    }

    console.log(finalPayload)
  }
  return (
    <div className='px-6'>
      <h1 className='text-3xl font-medium py-4 border-b border-gray'>Đăng tin mới</h1>
      <div className='flex gap-4'>
        <div className='py-4 flex flex-col gap-8 flex-auto'>
          <Address payload={payload} setPayload={setPayload} />
          <Overview payload={payload} setPayload={setPayload} />
          <div className='w-full'>
            <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
            <div className='w-full'>
              <label htmlFor='file' className='w-full my-4 cursor-pointer border-gray-400 flex flex-col gap-2 items-center justify-center border-2 rounded-md h-[200px] bg-white border-dashed'>
                {isLoading ? <Loading /> : <div className='flex flex-col gap-2 items-center justify-center'>
                  <BsCameraFill size={45} color='blue' />
                  Thêm ảnh
                </div>}

              </label>
              <input onChange={handleFiles} type='file' id='file' hidden multiple />
              <div>
                <h3 className='font-medium mb-2'>Ảnh đã chọn</h3>
                <div className='flex gap-4 items-start'>
                  {imagesPreview?.map((item, idx) => (
                    <div key={idx} className='relative'>
                      <img src={item} alt='preview-image' className='w-20 h-20 object-cover rounded-md' />
                      <span
                        onClick={() => handleDeleteImage(item)}
                        title='Xóa'
                        className='absolute top-[-10px] right-0 hover:bg-gray-400 bg-gray-200 rounded-full p-2 cursor-pointer'><RiDeleteBin6Line size={15} /></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Button
            handleOnclick={handleSubmit}
            style='bg-green-600 text-white flex items-center justify-center'>Tạo bài đăng mới</Button>
        </div>
        <div className='w-[30%] flex-none'>
          maps
        </div>
      </div>
      <div className='h-[500px]'></div>
    </div>
  )
}

export default CreatePost