import React, { memo } from 'react'
import { SelectInput, InputReadOnly, InputFormV2 } from '../../system'
import { useSelector } from 'react-redux'

const targets = [
  {
    code: 'Nam',
    value: 'Nam'
  },
  {
    code: 'Nữ',
    value: 'Nữ'
  }
]
const Overview = ({ payload, setPayload }) => {
  const { categoriesData } = useSelector(state => state.app)
  const { currentData } = useSelector(state => state.user)


  return (
    <div>
      <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>

      <div className='w-full flex flex-col gap-4'>
        <div className='w-1/2'>
          <SelectInput 
            value={payload.categoryCode}
            setValue={setPayload}
            name='categoryCode'
            label='Loại chuyên mục' options={categoriesData} />
        </div>
        <InputFormV2 label='Tiêu đề' name='title' value={payload.title} setValue={setPayload} />
        <div className='flex flex-col gap-2'>
          <label htmlFor='desc'>Nội dung mô tả</label>
          <textarea 
            value={payload.description}
            onChange={e => setPayload(prev => ({
              ...prev,
              description: e.target.value
            }))}
            id='desc' cols="30" rows="10" className='w-full rounded-md outline-none border border-gray-300 p-2'></textarea>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
          <InputReadOnly label='Thông tin liên hệ' value={currentData?.name || currentData?.username} />
          <InputReadOnly label='Điện thoại' value={currentData?.phone} />
          <InputFormV2 
            value={payload.priceNumber} setValue={setPayload}
            name='priceNumber'
            small='Vui lòng nhập đầy đủ số, ví dụ 1 triệu thì nhập 1000000' 
            label='Giá cho thuê' type='price' unit='đồng' />
          <InputFormV2 
            value={payload.areaNumber} setValue={setPayload}
            name='areaNumber'
            label='Diện tích' 
            type='area' unit='m2' />
          <SelectInput 
            value={payload.target}
            setValue={setPayload}
            name='target'
            label='Đối tượng cho thuê' options={targets} />
        </div>
      </div>


    </div>
  )
}

export default memo(Overview)