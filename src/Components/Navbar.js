import React, { useState } from 'react'

const Navbar = ({fetchData}) => {
    let [srch, setSrch] = useState(null)

    const mynavstyle = {
    width: "100%",
    boxShadow: "10px 10px 15px #dddd",
    display: "flex",
    justifyContent: "space-between",
    justifyItem: "space-between"
    }

    const mynavbar = {
        fontafmily: "Lucida Console, Courier New, monospace",
        fontSize: '20px',
        padding: '12px'
    }

    const mysearch = {
        padding: "10px",
    }

    let handleSearch = ()=>{
        fetchData(srch)
    }

    return (
    <>
    <nav style={mynavstyle}>
        <div className="navbar" style={mynavbar}>MoviesVerse</div>
        <div className="srch" style={mysearch}>
            <input type="text" onChange={(e)=>{return setSrch(e.target.value)}}/>
            <button type="submit" onClick={handleSearch}>Search</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar