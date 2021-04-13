import React from "react";

import { useProvider } from "../../helpers/contextHelper";

import "../form.css";

const Login: React.FC<{}> = () => {
    const { dispatch } = useProvider();

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
                Name:
                <input type='text' formTarget='name' required />
            </label>
            <label>
                Email:
                <input type='email' formTarget='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required />
            </label>
            <label>
                Password:
                <input type='password' formTarget='password' required />
            </label>
            <div className='form-submitWrapper'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default Login;
