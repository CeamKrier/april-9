import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import { useProvider } from "../../helpers/contextHelper";

import "../form.css";

const Contact: React.FC<{}> = () => {
    const textareaRef = useRef();
    const { state } = useProvider();
    const { t } = useTranslation();

    const handleSubmit = event => {
        event.preventDefault();

        const data = [...event.target.elements].map(t => ({ key: t.formTarget, value: t.value })).filter(t => t.key);
        data.push({ key: "message", value: textareaRef.current?.value });

        const formattedPayload = data.reduce((prev, next) => {
            prev[next.key] = next.value;
            return prev;
        }, {});

        console.log(formattedPayload);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                {t("forms.contact.name")}:
                <input type='text' formTarget='name' defaultValue={state.user?.name} required />
            </label>
            <label>
                {t("forms.contact.email")}:
                <input type='email' formTarget='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' defaultValue={state.user?.email} required />
            </label>
            <label>
                {t("forms.contact.phone")}:
                <input type='tel' formTarget='phone' pattern='[0-9]{4,}' required />
            </label>
            <label>
                {t("forms.contact.country")}:
                <input list='countries' formTarget='country' pattern='TR|US|UK|DE|KE|BR|ZW' required />
                <datalist id='countries'>
                    <option value='TR'>{t("forms.contact.countries.tr")}</option>
                    <option value='US'>{t("forms.contact.countries.us")}</option>
                    <option value='UK'>{t("forms.contact.countries.uk")}</option>
                    <option value='DE'>{t("forms.contact.countries.de")}</option>
                    <option value='KE'>{t("forms.contact.countries.ke")}</option>
                    <option value='BR'>{t("forms.contact.countries.br")}</option>
                    <option value='ZW'>{t("forms.contact.countries.zw")}</option>
                </datalist>
            </label>
            <label>
                {t("forms.contact.message")}:<textarea ref={textareaRef} rows={5} required></textarea>
            </label>
            <div className='form-submitWrapper'>
                <button type='submit'>{t("forms.contact.submit")}</button>
            </div>
        </form>
    );
};

export default Contact;
