import React, { memo } from 'react'

const SelectInput = ({label,name,isPayload, options,reset, value, setValue, type}) => {


  return (
    <div className='flex flex-col gap-2 flex-1'>
      <label className='font-medium' htmlFor='select-address'>{label}</label>
      <select 
        value={reset ? ' ' : value}
        onChange={(e) => !name ? setValue(e.target.value) : setValue(prev => ({
          ...prev,
          [name]: e.target.value
        }))}
         id='select-address' className='outline-none border border-gray-300 px-2 py-1 w-full rounded-md'>
        <option value=' '>{`--Chọn ${label}--`}</option>
        {options?.map(item => (
          <option 
            value={type === 'province' ? item.province_id : type === 'district' ? item.district_id : item?.code} 
            key={type === 'province' ? item.province_id :  type === 'district' ? item.district_id : item?.code}>{type === 'province' ? item.province_name : type === 'district' ? item.district_name : item?.value}</option>
        ))}
      </select>
    </div>
  )
}

export default memo(SelectInput)