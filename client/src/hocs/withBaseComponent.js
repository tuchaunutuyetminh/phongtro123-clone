import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const withBaseComponent = (Component) => (props) => {
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
  
    return (
    <Component
    {...props}
    navigate={navigate}
    location={location}
    dispatch={dispatch}
    />
  )
}

export default withBaseComponent