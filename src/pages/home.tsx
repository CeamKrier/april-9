import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./style.css";

const Home: React.FC<{}> = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("components.navbar.links.home")} - April-9`;
    }, [i18n.language]);

    return (
        <div className='page-wrapper'>
            <div className='page-content'>
                <h3>{t("pages.home.header")}</h3>
                <span>{t("pages.home.description")}</span>
            </div>
        </div>
    );
};

export default Home;
