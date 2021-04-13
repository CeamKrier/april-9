import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

const Picker: React.FC<{}> = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = useCallback(
        value => {
            i18n.changeLanguage(value?.target?.value || "en");
        },
        [i18n]
    );

    return (
        <select onChange={handleLanguageChange} value={i18n.language}>
            <option value='en'>EN</option>
            <option value='tr'>TR</option>
        </select>
    );
};

export default Picker;
