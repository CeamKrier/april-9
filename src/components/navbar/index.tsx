import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GrMenu, GrClose } from "react-icons/gr";

import LanguagePicker from "../picker";
import { useProvider } from "../../helpers/contextHelper";

import Icon from "./icon.svg";
import "./style.css";
import { normalizeText, TEXT_LENGTH_LIMIT } from "../../helpers/textHelper";

const Navbar = () => {
    const desktopPopupRef = useRef();

    const [mobilePopupVisibility, setMobilePopupVisibility] = useState(false);
    const [desktopPopupVisibility, setDesktopPopupVisibility] = useState(false);

    const { state, dispatch } = useProvider();

    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload: location?.pathname?.substring(1)
        });
    }, [location.pathname]);

    useEffect(() => {
        if (desktopPopupVisibility) {
            desktopPopupRef.current?.focus();
        }
    }, [desktopPopupVisibility, desktopPopupRef.current]);

    useEffect(() => {
        if (!desktopPopupRef.current) {
            return;
        }

        const listener = desktopPopupRef.current.addEventListener("blur", event => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
                setDesktopPopupVisibility(false);
            }
        });
        return () => {
            desktopPopupRef.current.removeEventListener("blur", listener);
        };
    }, [desktopPopupRef.current, setDesktopPopupVisibility]);

    const handleLogin = useCallback(() => {
        dispatch({
            type: "SET_MODAL_VISIBILITY",
            payload: true
        });
    }, [dispatch]);

    const handleLogout = useCallback(() => {
        console.log("hey");
        dispatch({
            type: "SET_USER_DATA",
            payload: null
        });

        setDesktopPopupVisibility(false);
    }, [dispatch, setDesktopPopupVisibility]);

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

    const handleMobileMenuClick = () => {
        setMobilePopupVisibility(!mobilePopupVisibility);
    };

    const handleUserDetailDisplay = () => {
        setDesktopPopupVisibility(!desktopPopupVisibility);
    };

    const renderAuthenticationMenu = useMemo(() => {
        return state.user ? <div className='navbar-avatar' onClick={handleUserDetailDisplay} /> : <button onClick={handleLogin}>{t("components.navbar.login")}</button>;
    }, [state.user, handleLogin, handleUserDetailDisplay, t]);

    const renderUserInfo = useMemo(() => {
        return (
            state.user && (
                <div className='navbar-userInfo'>
                    <span title={state.user.name.length > TEXT_LENGTH_LIMIT ? state.user.name : undefined}>{normalizeText(state.user.name)}</span>
                    <span title={state.user.email.length > TEXT_LENGTH_LIMIT ? state.user.email : undefined}>{normalizeText(state.user.email)}</span>
                    <button onClick={handleLogout}>{t("components.navbar.logout")}</button>
                </div>
            )
        );
    }, [state.user, normalizeText, TEXT_LENGTH_LIMIT, handleLogout, t]);

    const renderMobileAuthenticationMenu = useMemo(() => {
        return state.user ? renderUserInfo : <button onClick={handleLogin}>{t("components.navbar.login")}</button>;
    }, [renderUserInfo, state.user, handleLogin, handleLogout, t]);

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-content'>
                <div className='navbar-leftContent'>
                    <div className='navbar-brand'>
                        <Link to='/'>
                            <img src={Icon} />
                        </Link>
                        <h3>{state.currentPage.length > 0 ? t("pages.contact.title") : "April-9"}</h3>
                    </div>

                    <div className='navbar-links'>{renderLinks}</div>
                </div>

                <div className='navbar-rightContent'>
                    <div className='navbar-preferences'>
                        <LanguagePicker />
                        {renderAuthenticationMenu}
                    </div>

                    <div className='navbar-mobileMenu' onClick={handleMobileMenuClick}>
                        {mobilePopupVisibility ? <GrClose size='1.4em' /> : <GrMenu size='1.4em' />}
                    </div>

                    <div style={mobilePopupVisibility ? { display: "initial" } : {}} className='navbar-mobileMenu-popup'>
                        {renderLinks}
                        <div className='navbar-popup-preferences'>
                            {renderMobileAuthenticationMenu}
                            <LanguagePicker />
                        </div>
                    </div>

                    <div ref={desktopPopupRef} style={desktopPopupVisibility ? { display: "initial" } : {}} className='navbar-desktopMenu-popup' tabIndex={-1}>
                        {renderUserInfo}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
