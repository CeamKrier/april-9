import React from "react";
import { useTranslation } from "react-i18next";

import "./style.css";

const Footer: React.FC<{}> = () => {
    const { t } = useTranslation();

    return (
        <div className='footerWrapper'>
            <h4>{`${t("components.footer.text")} - 2021`}</h4>
        </div>
    );
};

export default Footer;
