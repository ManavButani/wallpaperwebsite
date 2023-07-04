import React from 'react'

const Images = ({props}) => {
  console.log(props);
    let myimager = {
      backgroundImage: `url(${props})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "230px",
      height: "330px",
      margin: "20px",
    };
  return (
    <>
        <div className="imager" style={myimager}></div>
    </>
  )
}

export default Images