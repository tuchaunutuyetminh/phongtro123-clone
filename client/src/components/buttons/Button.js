import clsx from 'clsx'
import React from 'react'

const Button = ({style, children, type, handleOnclick, fw}) => {
  return (
    <button
    onClick={handleOnclick}
    type={type}
    className={clsx(`px-4 py-2 font-bold outline-none rounded-md hover:underline  flex items-center gap-1`, style && style, fw && 'w-full')}
    >
        {children}
    </button>
  )
}

export default Button