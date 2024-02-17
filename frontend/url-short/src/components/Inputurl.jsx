import React from "react";
const boxstyle = {
  color: "b",
};
const inputstyle = {
  fontSize: "2.0rem",
  textAlign: "center",
};
const Inputurl = () => {
  return (
    <div style={inputstyle}>
      <label> Destination </label>
      <br></br>
      <input type="url" style={boxstyle}></input>
      <br></br>
      <button>Generate </button>
    </div>
  );
};

export default Inputurl;
