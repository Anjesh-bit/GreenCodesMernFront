import React from "react";
import './Loader.css'
import { motion } from "framer-motion";

import { defaultEase } from "../utils/Transition";
const FullScreenLoad = (props) => {
    return (
        <motion.div className="Loader" initial={{ width: "100%" }} animate={{ width: 0 }} transition={{ delay: 0.2, duration: 1, ease: defaultEase }}>
            <motion.h1 initial={{ display: "block" }} animate={{ display: "none" }} transition={{ delay: 0.2, duration: 3, ease: defaultEase }}>Please Wait...</motion.h1>
        </motion.div>
    )
}
export default FullScreenLoad;