import React from 'react'

const InputReadOnly = ({label, value}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='font-medium' htmlFor='exactly-adrress'>{label}</label>
            <input
                value={value || ''}
                id='exactly-adrress'
                type='text' readOnly
                className='outline-none border border-gray-200 rounded-md bg-gray-100 p-2 min-w-full' />
        </div>
    )
}

export default InputReadOnly