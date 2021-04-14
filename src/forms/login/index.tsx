import React from "react";
import { useTranslation } from "react-i18next";

import { useProvider } from "../../helpers/contextHelper";

import "../form.css";

const Login: React.FC<{}> = () => {
    const { dispatch } = useProvider();
    const { t } = useTranslation();

    const handleSubmit = event => {
        event.preventDefault();

        const data = [...event.target.elements].map(t => ({ key: t.formTarget, value: t.value })).filter(t => t.key);

        dispatch({
            type: "SET_USER_DATA",
            payload: data
        });

        dispatch({
            type: "SET_MODAL_VISIBILITY",
            payload: false
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                {t("forms.login.name")}:
                <input type='text' formTarget='name' required />
            </label>
            <label>
                {t("forms.login.email")}:
                <input type='email' formTarget='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required />
            </label>
            <label>
                {t("forms.login.password")}:
                <input type='password' formTarget='password' required />
            </label>
            <div className='form-submitWrapper'>
                <button type='submit'>{t("forms.login.submit")}</button>
            </div>
        </form>
    );
};

export default Login;
