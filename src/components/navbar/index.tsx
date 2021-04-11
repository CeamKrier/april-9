import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GrMenu, GrClose } from "react-icons/gr";
import { useProvider } from "../../helpers/contextHelper";

import Icon from "./icon.svg";
import "./style.css";

const Navbar = () => {
    const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

    const { state, dispatch } = useProvider();

    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload: location?.pathname?.substring(1)
        });
    }, [location.pathname]);

    const handleLanguageChange = useCallback(
        value => {
            i18n.changeLanguage(value?.target?.value || "en");
        },
        [i18n]
    );
    const handleLoginClick = useCallback(() => {
        dispatch({
            type: "SET_MODAL_VISIBILITY",
            payload: true
        });
    }, [dispatch]);

    const renderLinks = useMemo(() => {
        return (
            <ul>
                <li>
                    <Link to='/'>{t("components.navbar.links.home")}</Link>
                </li>
                <li>
                    <Link to='/contact'>{t("components.navbar.links.contact")}</Link>
                </li>
            </ul>
        );
    }, [i18n.language]);

    const renderLanguagePicker = useMemo(() => {
        return (
            <select onChange={handleLanguageChange} defaultValue='tr'>
                <option value='en'>EN</option>
                <option value='tr'>TR</option>
            </select>
        );
    }, [handleLanguageChange]);

    const handleMobileMenuClick = () => {
        setMobileMenuVisibility(!mobileMenuVisibility);
    };

    const renderAvatar = useMemo(() => {
        return state.isLoggedIn ? <div className='navbar-avatar'></div> : <button onClick={handleLoginClick}>Login</button>;
    }, [state.isLoggedIn, handleLoginClick]);

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-content'>
                <div className='navbar-leftContent'>
                    <div className='navbar-brand'>
                        <img src={Icon} />
                        <h3>{state.currentPage.length > 0 ? t("pages.contact.title") : "April-9"}</h3>
                    </div>

                    <div className='navbar-links'>{renderLinks}</div>
                </div>

                <div className='navbar-rightContent'>
                    <div className='navbar-preferences'>
                        {renderLanguagePicker}
                        {renderAvatar}
                    </div>

                    <div className='navbar-mobileMenu' onClick={handleMobileMenuClick}>
                        {mobileMenuVisibility ? <GrClose size='1.4em' /> : <GrMenu size='1.4em' />}
                    </div>

                    <div style={mobileMenuVisibility ? { display: 'initial' } : {}} className='navbar-mobileMenu-popup'>
                        {renderLinks}
                        <div className='navbar-popup-preferences'>
                            {renderAvatar}
                            {renderLanguagePicker}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
