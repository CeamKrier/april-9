import React, { useReducer, useContext } from "react";

import { ContextProps, ProviderProps, StateKeys } from "../types";

const initialState: StateKeys = {
    currentPage: "",
    user: {
        name: "",
        email: "",
        password: ""
    },
    isLoggedIn: false,
    isModalVisible: false
};

export const Context = React.createContext<ContextProps>({
    state: initialState,
    dispatch: () => {}
});

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE":
            state.currentPage = action.payload;
            break;
        case "SET_MODAL_VISIBILITY":
            console.log(action.payload)
            state.isModalVisible = action.payload;
            break;
    }
    return Object.assign({}, state);
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);
