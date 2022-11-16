import React from "react";
import Topbar from "../components/Home/Topbar";
import Footer from "../components/Footer/Footer";
import Casestudies from "../components/Projects/Casestudies";
import { ModalClose } from "../actions/ModalActions";
import { useDispatch } from "react-redux";
const Casestudies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ModalClose());
    }, [])
    return (
        <>
            <Topbar />
            <Casestudies />
            <Footer />
        </>
    )
}