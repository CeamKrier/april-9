import React from "react";
import { useTranslation } from "react-i18next";

import "./style.css";

const Footer: React.FC<{}> = () => {
    const { t } = useTranslation();

    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <span>{`${t("components.footer.text")} - 2021`}</span>
            </div>
        </div>
    );
};

export default Footer;
