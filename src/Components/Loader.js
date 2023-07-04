import React from "react";
import manav from "./Image/manav.gif";

const Loader = () => {

    let myimage = {
        position: "relative",
        top: "250px",
        left: "600px",
        width: "200px",
        height: "200px"
    }

  return (
    <>
    <img src={manav} alt="No Image" style={myimage}/>
    </>
  );
};

export default Loader;
