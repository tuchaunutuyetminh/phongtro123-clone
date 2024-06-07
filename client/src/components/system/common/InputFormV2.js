import clsx from 'clsx'
import React from 'react'

const InputFormV2 = ({label, value, setValue, type, unit, name, small}) => {
    return (
        <div>
            <label htmlFor={type}>{label}</label>
            <div className='flex items-center'>
            <input 
                value={value}
                onChange={e => setValue(prev => ({
                    ...prev,
                    [name]: e.target.value
                }))}
                type='text' 
                id={type} className={`${unit ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'} flex-auto border outline-none border-gray-300 p-2`} />
            {unit &&  <span className='p-2 border flex-none w-16 flex items-center justify-center bg-gray-200 rounded-tr-md rounded-br-md '>{unit}</span>}
            </div>
            {small && <small className='opacity-70'>{small}</small>}
        </div>
    )
}

export default InputFormV2