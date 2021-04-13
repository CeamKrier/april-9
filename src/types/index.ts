import { ReactElement } from "react";
export interface StateKeys {
    currentPage: string;
    user: {
        name: string;
        email: string;
        password: string;
    } | null;
    isModalVisible: boolean;
}

export interface ContextProps {
    state: StateKeys;
    dispatch: ({ type, payload }: DispatchParameters) => void;
}

export interface ProviderProps {
    children: ReactElement;
}

export type ReducerAction = "SET_CURRENT_PAGE" | "SET_USER_DATA" | "SET_MODAL_VISIBILITY";

export interface DispatchParameters {
    type: ReducerAction;
    payload: any;
}
