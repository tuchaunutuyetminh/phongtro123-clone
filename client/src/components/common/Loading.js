import React from 'react'
import { ColorRing } from 'react-loader-spinner'
const Loading = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#1266dd','#1266dd','#1266dd', '#1266dd', '#1266dd']}
        />
    )
}

export default Loading