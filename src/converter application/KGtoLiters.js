import React, { useState } from "react";

function KGtoLiters() {
  let density;
  let [kg, updateKG] = useState("");
  let [liters, updateLiters] = useState("");

  let handleupdateKG = (event) => {
    updateLiters(() => {
      return "";
    });
    updateKG(() => {
      return event.target.value;
    });
  };

  let handleLiters = (event) => {
    updateKG(() => {
      return "";
    });

    updateLiters(() => {
      return event.target.value;
    });
  };

  let submitKG = () => {
    density = document.getElementById("myDensity").value;
    updateLiters(() => {
      return kg / density;
    });
  };

  let submitLiters = () => {
    density = document.getElementById("myDensity").value;
    updateKG(() => {
      return liters * density;
    });
  };

  let both = () => {
    updateKG("");
    updateLiters("");
  };

  return (
    <>
      <h1>Enter Density:</h1>
      <input
        type="text"
        value={density}
        id="myDensity"
        onChange={(event) => {
          both();
          return event.target.value;
        }}
      ></input>

      <h1>KG:</h1>
      <input type="text" value={kg} onChange={handleupdateKG}></input>

      <h1>liters:</h1>
      <input type="text" value={liters} onChange={handleLiters}></input>

      <br />
      {liters === "" ? (
        <button type="submit" onClick={submitKG}>
          Convert
        </button>
      ) : (
        <button type="submit" onClick={submitLiters}>
          Convert
        </button>
      )}
    </>
  );
}

export default KGtoLiters;
