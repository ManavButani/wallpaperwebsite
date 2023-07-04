import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Imagetile from "./component/Imagetile";

const App = () => {
  let [ram, setData] = useState(null);

  let fetchData = async (keyword) => {
    let res = await fetch(`https://api.pexels.com/v1/search?query=${keyword}`, {
      headers: {
        Authorization:
          "QD554SWJEgyHvQ5qoug5zvVL7schQ05EHHPDnAY74k3imPZDzBXcPEcM",
      },
    });
    let data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData("tree");
  }, []); // Empty dependency array to trigger the effect only once when the component mounts

  console.log(ram);

  return (
    <>
      <Navbar fetchData={fetchData} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent :"center"}}>
        {ram &&
          ram.photos &&
          ram.photos.map((ele) => {
            return <Imagetile imagSrc={ele.src.medium} />;
          })}
      </div>
    </>
  );
};

export default App;
