import React from "react";
import Allprojects from "../components/Projects/Allprojects";
import Topbar from "../components/Home/Topbar";
import Footer from "../components/Footer/Footer";
import { modalClose } from "../actions/ModalActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AllprojectPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modalClose());
  }, [dispatch]);

  return (
    <div>
      <Topbar />
      <Allprojects />
      <Footer />
    </div>
  );
};

export default AllprojectPage;
