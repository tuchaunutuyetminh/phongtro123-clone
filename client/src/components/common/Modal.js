import React from 'react'

function Modal({children}) {
  return (
    <div className='absolute bg-overlay flex items-center justify-center'>
        {children}
    </div>
  )
}

export default Modal