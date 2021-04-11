import React, { useReducer, useContext } from "react";

import { ContextProps, ProviderProps, StateKeys } from "../types";

const initialState: StateKeys = {
    currentPage: ""
};

export const Context = React.createContext<ContextProps>({
    state: initialState,
    dispatch: () => {}
});

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE":
            state.currentPage = action.payload;
            return Object.assign({}, state);
        default:
            break;
    }
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);
