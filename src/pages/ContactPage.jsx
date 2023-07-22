import React from "react";
import Contact from "../components/Contact/Contact";
import Topbar from "../components/Home/Topbar";
import Footer from "../components/Footer/Footer";
import { modalClose } from "../actions/ModalActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modalClose());
  }, [dispatch]);

  return (
    <>
      <Topbar />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
