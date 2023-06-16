import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KGtoLiters from "./KGtoLiters";
import KmMiles from "./KmMiles";
import YardtoFeet from "./YardtoFeet";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<NavBar />}></Route> */}
          <Route path="/ktm" element={<KmMiles />}></Route>
          <Route path="/ktl" element={<KGtoLiters />}></Route>
          <Route path="/ytf" element={<YardtoFeet />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
