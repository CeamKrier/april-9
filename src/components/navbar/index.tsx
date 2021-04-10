import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from './icon.svg';
import { useProvider } from "../../helpers/contextHelper";

import "./style.css";

const Navbar = () => {
    const { state, dispatch } = useProvider();
    const location = useLocation();

    useEffect(() => {
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload: location?.pathname?.substring(1)
        });
    }, [location.pathname]);

    const handleLanguageChange = value => {
        dispatch({
            type: "SET_LOCALIZATION_PREFERENCE",
            payload: value
        });
    };

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-leftContent'>
                <img src={Icon}/>
                <h3>{state.currentPage.length > 0 ? state.currentPage : "April-9"}</h3>
            </div>

            <div className='navbar-rightContent'>
                <ul className='navbar-linkList'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
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
