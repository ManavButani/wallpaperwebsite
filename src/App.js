import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Loader from './Components/Loader'
import Images from './Components/Images'

const App = () => {

    let [data, setData] =  useState(null)
    let myimages = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center",
      padding: "50px"
    }

    const fetchData = async (keyword)=>{
        let res = await fetch(
        `https://api.pexels.com/v1/search?query=${keyword}`,
        {
            header: {
            Authorization:
                "QD554SWJEgyHvQ5qoug5zvVL7schQ05EHHPDnAY74k3imPZDzBXcPEcM",
            },
        }
        );

        let data = await res.json();
        setData(data)
    }

        useEffect(()=>{
            fetchData("tree")
        },[])

return (
  <>
    <Navbar fetchData={fetchData} />
    <div className="imageclass" style={myimages}>
      {data ? (
        data.photos.map((ele,index) => {
          return <Images key ={index} props={ele.src.medium} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  </>
);
}

export default App