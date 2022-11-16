import React from 'react';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import ListViews from './ListViews';
import "./Modal.css";
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#113628",
        position: "relative",
        height: "100%",
        width: "100%",
        textAlign: "center",
        color: "#ddd"
    },
}));

const CommonModal = (props) => {
    const { AreaLabelby, AreaDescribedBy, ClassName, open, HandleOnClose } = props;
    const classes = useStyles();
    return (
        <div>

            <Modal
                aria-labelledby={AreaLabelby}
                aria-describedby={AreaDescribedBy}
                className={classes.modal}
                open={open}
                onClose={HandleOnClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div style={{ position: "absolute", top: "5%", right: "5%" }}>
                            <CloseIcon onClick={HandleOnClose} fontSize="large" />
                        </div>
                        <div>
                            <ListViews />
                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default CommonModal;