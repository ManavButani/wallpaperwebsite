import React, { useState } from 'react';

const Navbar = ({ fetchData }) => {
  let [srch, setSrch] = useState("tree");

  const mynavstyle = {
    width: "100%",
    boxShadow: "10px 10px 15px #dddd",
    display: "flex",
    justifyContent: "space-between",
    justifyItem: "space-between"
  };

  const mydivstyle = {
    padding: "10px 30px",
    fontSize: "16pt",
  };

  const mybuttonstyle = {
    padding: "7px",
    fontSize: "1rem",
    color: "pink",
    margin: "15px",
    backgroundColor: "purple",
    border: "none"
  };

  let handleSearch = () => {
    fetchData(srch);
  };

  return (
    <>
      <nav style={mynavstyle}>
        <div className="n div" style={mydivstyle}>MoviesVerse</div>
        <div className="srchbar">
          <input type="text" onChange={(e) => setSrch(e.target.value)} />
          <button onClick={handleSearch} style={mybuttonstyle}> Search </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
