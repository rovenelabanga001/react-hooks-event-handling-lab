// Code Keypad Component Here
import React from "react";

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input
        type="password"
        name="Enter Password"
        onChange={handleChange}
        placeholder="Enter Password"
      ></input>
    </div>
  );
}

export default Keypad;
