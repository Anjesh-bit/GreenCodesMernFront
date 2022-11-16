import React from "react";
import { IconButton } from "@material-ui/core";
import MoreIcon from '@material-ui/icons/MoreVert';
import { useDispatch } from "react-redux";
import IconButtonActions from "../actions/IconButtonActions";

const GreenIconButton = (props) => {

    const { Edge, AriaLabel, AriaControlId, AriaHashPopUp, Onclick, Color, Icon } = props;

    return (<IconButton
        edge={Edge}
        aria-label={AriaLabel}
        aria-controls={AriaControlId}
        aria-haspopup={AriaHashPopUp}
        onClick={Onclick}
        color={Color}
    >
        {Icon}
    </IconButton>)
}

export default GreenIconButton;