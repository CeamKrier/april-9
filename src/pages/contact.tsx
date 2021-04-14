import React from "react";
import { useTranslation } from "react-i18next";

import ContactForm from "../forms/contact";

import "./style.css";

const Contact: React.FC<{}> = () => {
    const { t } = useTranslation();

    return (
        <div className='page-wrapper'>
            <div className='page-content'>
                <h3>{t("pages.contact.header")}</h3>
                <span>{t("pages.contact.description")}</span>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
