import React from "react";
import Appbars from "../common/Appbar";
import DataTable from "../common/DataTable";
import { useSelector } from "react-redux";
const DashBoard = () => {
    return (<div>
        <Appbars />
        <DataTable />
    </div>)
}

export default DashBoard;