import * as React from "react";
import Buttons from "./Buttons";
import Input from "./Input";
 
export default function Body() {
  return (
    <div className="wrapper">
        <h1>Calculator</h1>
        <div className="comps">
            <Input></Input>
            <Buttons></Buttons>
        </div>
    </div>
  );
}
