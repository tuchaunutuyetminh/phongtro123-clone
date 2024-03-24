import React from 'react'

const Button = ({style, children, type}) => {
  return (
    <button
    type={type}
    className={`p-2 ${style && style} outline-none rounded-md hover:underline  flex items-center gap-1`}
    >
        {children}
    </button>
  )
}

export default Button