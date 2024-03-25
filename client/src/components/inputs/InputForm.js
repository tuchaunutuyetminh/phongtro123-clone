import React, { memo } from 'react'
import clsx from 'clsx'
const InputForm = ({label, disabled, register, errors, id, validate, type='text', placeholder, fullWidth, defaultValue, style}) => {
  return (
    <div className='flex flex-col gap-2'>
        {label && <label className='text-sm font-semibold' htmlFor={id}>{label}</label>}
        <input
          id={id}
          placeholder={placeholder ? placeholder : ''}
          {...register(id, validate)}
          type={type}
          className={clsx('outline-none bg-[#e8f0fe] p-2 rounded-md h-[45px]', fullWidth && 'w-full')}
        />
    </div>
  )
}

export default memo(InputForm)