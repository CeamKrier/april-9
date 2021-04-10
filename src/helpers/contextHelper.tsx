import React, { useReducer, useContext } from "react";

import { ContextProps, ProviderProps, StateKeys } from "../types";

const initialState: StateKeys = {
    currentPage: "",
    language: "en"
};

export const Context = React.createContext<ContextProps>({
    state: initialState,
    dispatch: () => {}
});

const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE":
            state.currentPage = action.payload;
            return Object.assign({}, state);
        case "SET_LOCALIZATION_PREFERENCE":
            state.language = action.payload;
            return Object.assign({}, state);
        default:
            break;
    }
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);
