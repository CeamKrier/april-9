import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./style.css";

const Spinner: React.FC<{ blurBackground?: boolean }> = ({ blurBackground = false }) => {
    return (
        <div className={`spinner-wrapper ${blurBackground && 'blurred'}`}>
            <AiOutlineLoading3Quarters size='2em' />
        </div>
    );
};

export default Spinner;
