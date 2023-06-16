import React from "react";
import "./App.css"
const App = () => {
  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://www.google.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div className="manav">
          <label for="customRange1" class="form-label">
            Example range
          </label>
          <input type="range" class="form-range" id="customRange1"></input>
        </div>
      </div>
    </>
  );
};

export default App;
