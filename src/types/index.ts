import { ReactElement } from "react";
export interface StateKeys {
    currentPage: string;
    user: {
        name: string,
        email: string,
        password: string
    },
    isLoggedIn: boolean;
    isModalVisible: boolean;
}

export interface ContextProps {
    state: StateKeys;
    dispatch: ({ type, payload }: DispatchParameters) => void;
}

export interface ProviderProps {
    children: ReactElement;
}

export type ReducerAction = "SET_CURRENT_PAGE" | "SET_LOCALIZATION_PREFERENCE" | "SET_MODAL_VISIBILITY";

export interface DispatchParameters {
    type: ReducerAction;
    payload: any;
}
