import React from 'react'

function Modal({children, setIsShowModal}) {
  return (
    <div 
      onClick={(e) => {
        setIsShowModal(false)
      }}
      className='fixed top-0 left-0 right-0 bottom-0 bg-overlay flex items-center justify-center z-20'
      >
        {children}
    </div>
  )
}

export default Modal