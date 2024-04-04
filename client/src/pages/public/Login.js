import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputForm from '../../components/inputs/InputForm'
import Button from '../../components/common/Button'
import withBaseComponent from '../../hocs/withBaseComponent'
import { loginUser, registerUser } from '../../store/auth/asyncActions'
import { useSelector } from 'react-redux'
import { apiRegister } from '../../services/auth'
import Swal from 'sweetalert2'
import {path} from '../../utils/constants'
const Login = ({ location, dispatch, navigate }) => {
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const { register, formState: { errors }, handleSubmit, reset, clearErrors } = useForm()
  const { isLogged } = useSelector(state => state.auth)
  
  useEffect(() => { 
    isLogged && navigate('/')
   },[isLogged])
  const handleSubmitForm = async (data) => {
    // const response = await apiRegister(data)
    console.log('data: ', data)
    if (isRegister) {
      const response = await apiRegister(data)
      if (response.err === 0) Swal.fire({
        title: 'Thành công!',
        text: response.msg,
        icon: 'success'
      }).then(rs => {
        if (rs.isConfirmed) navigate(`/${path.LOGIN}`)
      })
      else Swal.fire({
        title: 'Oop...',
        text: response.msg,
        icon: 'error',
        confirmButtonText: 'Try again'
      })
    } else dispatch(loginUser({
      password: data.password,
      phone: data.phone
    }))
  }
  useEffect(() => {
    setIsRegister(location.state?.flag)
    clearErrors()
    reset()
  }, [location.state?.flag])
  return (
    <div className='justify-center gap-2 bg-white min-w-[600px] p-[30px] mt-[20px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-3xl'>{isRegister ? 'Tạo tài khoản mới' : 'Đăng nhập'}</h3>
      <form className='w-full flex flex-col gap-4 pt-[18px]' onSubmit={handleSubmit(handleSubmitForm)}>
        {isRegister && <InputForm
          label='HỌ TÊN'
          register={register}
          errors={errors}
          id='name'
          validate={{ required: 'Vui lòng nhập họ tên của bạn.' }}
          fullWidth
        />}
        <InputForm
          label='SỐ ĐIỆN THOẠI'
          register={register}
          errors={errors}
          id='phone'
          validate={{
            required: 'Vui lòng nhập số điện thoại của bạn.', pattern: {
              value: /^[62|0]+\d{9}/gi,
              message: "Vui lòng nhập đúng định dạng số điện thoại."
            }
          }}
          fullWidth
        />
        <InputForm
          label='MẬT KHẨU'
          register={register}
          errors={errors}
          id='password'
          validate={{
            required: 'Vui lòng không được bỏ trống.', pattern: {
              value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: 'Vui lòng nhập tối thiểu 6 ký tự.'
            }
          }}
          fullWidth
        />
        <Button
          style='bg-[#3961fb] flex justify-center'
          fw
          type='submit'>
          {isRegister ? 'Đăng ký' : 'Đăng nhập'}
        </Button>
      </form>
      <div className='flex justify-between pt-6'>
        {isRegister ? <span>Bạn đã có tài khoản ?<span className='text-[#1266dd] cursor-pointer hover:text-[#f60]' onClick={() => {
          setIsRegister(false)
          reset()
          clearErrors()
        }}>Đăng nhập ngay</span></span> : <>
          <span className='text-[#1266dd] cursor-pointer hover:text-[#f60]'>Bạn quên mật khẩu?</span>
          <span className='text-[#1266dd] cursor-pointer hover:text-[#f60]' onClick={() => {
            setIsRegister(true)
            reset()
            clearErrors()
          }}>Tạo tài khoản mới</span>
        </>}

      </div>
    </div>
  )
}

export default withBaseComponent(Login)