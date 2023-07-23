import React from "react";
import { listData } from "./DataModel";
import "./Listxs.css";

const Listxs = () => {
  const { home, about, services, projects, contact } = listData;

  return (
    <div>
      <ul className="listItems">
        <li>{home}</li>
        <li>{about}</li>
        <li>{services}</li>
        <li>{projects}</li>
        <li>{contact}</li>
      </ul>
    </div>
  );
};

export default Listxs;
