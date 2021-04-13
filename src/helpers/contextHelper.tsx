import React, { useReducer, useContext } from "react";

import { ContextProps, ProviderProps, StateKeys } from "../types";

const initialState: StateKeys = {
    currentPage: "",
    user: null,
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
            state.isModalVisible = action.payload;
            break;
        case "SET_USER_DATA":
            if (!action.payload) {
                state.user = null;
                break;
            }

            if (!state.user) {
                state.user = {};
            }

            action.payload?.map(pair => {
                state.user[pair.key] = pair.value;
            });
            break;
    }
    return Object.assign({}, state);
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);
