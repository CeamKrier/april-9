import React, { useReducer, useContext } from "react";

import { ContextProps, ProviderProps } from "../types";

const initialState = {};

const Context = React.createContext<ContextProps>({
    state: initialState,
    dispatch: () => {}
});

const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE":
            return Object.assign({}, state);
        default:
            break;
    }
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);
