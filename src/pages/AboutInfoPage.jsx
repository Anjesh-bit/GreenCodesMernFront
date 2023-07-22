import Aboutinfo from "../components/About/Aboutinfo";
import Topbar from "../components/Home/Topbar";
import Footer from "../components/Footer/Footer";
import { modalClose } from "../actions/ModalActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AboutInfopage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modalClose());
  }, []);
  return (
    <div>
      <Topbar />
      <Aboutinfo />
      <Footer />
    </div>
  );
};

export default AboutInfopage;
