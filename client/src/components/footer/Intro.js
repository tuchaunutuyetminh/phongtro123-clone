import React, { memo } from 'react'
import { text } from '../../utils/dataIntro'
import { formatVietnameseToString, renderStarToNumber } from '../../utils/helper'
import Button from '../buttons/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Intro = () => {
    const {categoriesData} = useSelector(state => state.app)

    return (
        <div className='w-3/5 bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center gap-3'>
            <h3 className='font-semibold text-lg'>{text.title}</h3>
            <p className='text-gray-800 text-center my-4'>
                {text.description}
                <span className='text-link'>
                    {categoriesData.length > 0 && categoriesData.map(item => (
                        <Link 
                            to={`${formatVietnameseToString(item.value)}`}
                            key={item.code}
                            className='font-medium text-blue-600 hover:text-orange-500'
                        >
                            {`${item.value.toLowerCase()}, `}
                        </Link>
                    ))}
                </span>
                {text.description2}
            </p>
            <div className='flex items-center justify-around w-full'>
                {text.statistical.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <h4 className='font-semibold text-[20px]'>{item.value}</h4>
                        <p className='text-gray-700'>{item.name}</p>
                    </div>
                ))}
            </div>
            <h3 className='font-semibold text-lg py-2'>{text.price}</h3>
            <div className='flex items-center justify-center gap-2'>
                {renderStarToNumber(5).map((item, index) => (
                    <span key={index}>{item}</span>
                ))}

            </div>
            <p className='text-gray-600 italic text-center'>{text.comment}</p>
            <span className='text-gray-600'>{text.author}</span>

            <h3 className='font-semibold text-lg py-2'>{text.question}</h3>
            <p className='text-gray-600 '>{text.answer}</p>
            <Button style='text-white bg-secondary2 font-bold px-3 py-2'>Đăng ký ngay</Button>
            <div className='h-[12px]'>
                
            </div>
        </div>
    )
}

export default memo(Intro)