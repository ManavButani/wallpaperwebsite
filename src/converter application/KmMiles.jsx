import React, { useState } from "react";

function KmMiles() {
  let [miles, updateMiles] = useState("");
  let [km, updateKm] = useState("");

  let handleMiles = (event) => {
    updateKm(()=>{
      return ""
    })
    updateMiles(() => {
      return event.target.value;
    });
    updateKm(() => {
      return event.target.value * 1.609;
    });
  };

  let handleKm = (event) => {
    updateMiles(() => {
        return "";
      });

    updateKm(() => {
      return event.target.value;
    });

    updateMiles(() => {
      return event.target.value / 1.609;
    });
  };


  return (
    <>
      <h1>Miles:</h1>
      <input type="text" value={miles} onChange={handleMiles}></input>

      <h1>Kilometer:</h1>
      <input type="text" value={km} onChange={handleKm}></input>
    </>
  );
}

export default KmMiles;
