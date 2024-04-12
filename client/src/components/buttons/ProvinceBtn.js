import React from 'react'

const ProvinceBtn = ({name, images}) => {
  return (
    <div className='shadow-md rouded-bl-md rounded-br-md cursor-pointer'>
      <img 
        src={images} 
        alt={name}
        className='w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md'
      />
      <div className='font-bold p-2 text-blue-700 text-center hover:text-[#ff6600]'>{name}</div>
    </div>
  )
}

export default ProvinceBtn