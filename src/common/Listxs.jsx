import React from "react";
import { Listdata } from "./DataModel";
import "./Listxs.css";

const Listxs = () => {
  return (
    <div>
      <ul className="listItems">
        <li>{Listdata.home}</li>
        <li>{Listdata.about}</li>
        <li>{Listdata.services}</li>
        <li>{Listdata.projects}</li>
        <li>{Listdata.contact}</li>
      </ul>
    </div>
  );
};

export default Listxs;
