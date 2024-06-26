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
          type={type || 'text'}
          className={clsx('outline-none p-2 rounded-md h-[45px]',style && style, fullWidth && 'w-full', errors[id] && 'border border-red-600' )}
        />
        {errors[id] && <small className='text-xs text-red-500'>{errors[id]?.message}</small>}
    </div>
  )
}

export default memo(InputForm)