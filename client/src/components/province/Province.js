import React from 'react'
import { location } from '../../utils/constants'
import ProvinceBtn from '../buttons/ProvinceBtn'

const Province = () => {
  return (
    <div className='flex items-center justify-center gap-5 py-5 shadow-md'>
          {location.map((item) => (
            <ProvinceBtn key={item.id} images={item.image} name={item.name}/>
          ))}
      </div>
  )
}

export default Province