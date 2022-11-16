import React from "react";
import GridOnIcon from '@material-ui/icons/GridOn';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import './ToggleButton.css';
const ToggleButton = (props) => {
    const { values, toogle, handleToggle } = props;
    return (
        <>
            <button onClick={() => handleToggle(!values)} className="ToggleButton">
                {values ? <GridOnIcon fontSize="small" /> : <ViewColumnIcon fontSize="large" />}
            </button>
        </>
    )

}
export default ToggleButton;