import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useProvider } from "../../helpers/contextHelper";

import Icon from "./icon.svg";
import "./style.css";

const Navbar = () => {
    const { state, dispatch } = useProvider();
    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload: location?.pathname?.substring(1)
        });
    }, [location.pathname]);

    const handleLanguageChange = value => {
        i18n.changeLanguage(value?.target?.value || "en");
    };

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-leftContent'>
                <img src={Icon} />
                <h3>{state.currentPage.length > 0 ? t("pages.contact.title") : "April-9"}</h3>
            </div>

            <div className='navbar-rightContent'>
                <ul className='navbar-linkList'>
                    <li>
                        <Link to='/'>{t("components.navbar.links.home")}</Link>
                    </li>
                    <li>
                        <Link to='/contact'>{t("components.navbar.links.contact")}</Link>
                    </li>
                </ul>

                <div className='navbar-preferencesSection'>
                    <select onChange={handleLanguageChange} defaultValue='tr'>
                        <option value='en'>EN</option>
                        <option value='tr'>TR</option>
                    </select>

                    <div className='navbar-avatar'></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
