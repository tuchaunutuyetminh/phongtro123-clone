import React, { memo, useEffect, useState } from 'react'
import SelectInput from '../common/SelectInput'
import { apiGetPublicDistrict, apiGetPublicProvinces } from '../../../services/app'
import InputReadOnly from '../common/InputReadOnly'

const Address = ({setPayload}) => {

    const [provinces, setprovinces] = useState([])
    const [districts, setDistricts] = useState([])

    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [reset, setReset] = useState(false)

    const fetchPublicProvince = async () => {
        const response = await apiGetPublicProvinces()
        if (response?.status === 200) setprovinces(response?.data?.results)
    }


    useEffect(() => {
        fetchPublicProvince()
    }, [])

    useEffect(() => {
        setDistrict('')
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province)
            if (response?.status === 200) setDistricts(response?.data?.results)

        }
        province && fetchPublicDistrict()
        !province ? setReset(true) : setReset(false)
        !province && setDistricts([])
    }, [province])

    useEffect(() => { 
        setPayload(prev => ({
            ...prev,
            address: `${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? `${provinces?.find(item => +item.province_id === +province)?.province_name}` : ''}`,
            province: province ? provinces?.find(item => +item.province_id === +province)?.province_name : ''
        }))
     },[province, district])
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Địa chỉ cho thuê</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <SelectInput reset={reset} type='province' value={province} setValue={setProvince} label='Tỉnh/Thành phố' options={provinces} />
                    <SelectInput reset={reset} type='district' value={district} setValue={setDistrict} label='Quận/huyện' options={districts} />
                </div>
                <InputReadOnly
                    label='Địa chỉ chính xác'
                    value={`${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? `${provinces?.find(item => +item.province_id === +province)?.province_name}` : ''}`}
                />
            </div>
        </div>
    )
}

export default memo(Address)