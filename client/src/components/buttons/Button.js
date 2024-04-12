import clsx from 'clsx'
import React from 'react'

const Button = ({style, children, type, handleOnclick, fw}) => {
  return (
    <button
    onClick={handleOnclick}
    type={type}
    className={clsx(`p-2 text-white outline-none rounded-md hover:underline  flex items-center gap-1 font-semibold`, style && style, fw && 'w-full')}
    >
        {children}
    </button>
  )
}

export default Button