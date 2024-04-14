import React from 'react'

const ProvinceBtn = ({name, images}) => {
  return (
    <div className='shadow-md rouded-bl-md rounded-br-md cursor-pointer text-blue-700 hover:text-[#ff6600]'>
      <img 
        src={images} 
        alt={name}
        className='w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md'
      />
      <div className='font-bold p-2 text-center'>{name}</div>
    </div>
  )
}

export default ProvinceBtn