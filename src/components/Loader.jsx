import React from "react";
import "../App.css"
const Loader = () => {
  return (
    <div>
      <div id="loader">
        <div id="loaded"></div>
      </div>
      <div className="terminal">
        <p className="delay1">Booting up</p>
        <p className="delay2">Starting the development server</p>
        <p className="delay3">Creating Deployment build</p>
        <p className="delay4">Created successfully</p>
        <p className="delay5">Deployment is Process</p>
        <p className="delay6">PROCESSING...</p>
        <p className="delay7">Compiled successfully</p>
        <p className="delay8">Happy Hacking</p>
      </div>
    </div>
  );
};

export default Loader;
