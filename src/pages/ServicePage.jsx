import Services from "../components/Services/Services";
import Topbar from "../components/Home/Topbar";
import Footer from "../components/Footer/Footer";
import { ModalClose } from "../actions/ModalActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ServicesPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ModalClose());
    }, [])
    return (
        <div>
            <Topbar />
            <Services />
            <Footer />
        </div>
    )
}
export default ServicesPage;