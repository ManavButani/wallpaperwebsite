import React from 'react'

const Imagetile = ({imagSrc, imageID}) => {
  return (
    <>
    <div
    
    style={{
        backgroundImage: `url("${imagSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: '230px',
        height: '330px',
        margin: '20px',
    }}
    ></div>
    </>
  )
}

export default Imagetile