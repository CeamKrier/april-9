import { ReactElement } from "react";
export interface StateKeys {
    currentPage: string;
}

export interface ContextProps {
    state: StateKeys;
    dispatch: ({ type, payload }: DispatchParameters) => void;
}

export interface ProviderProps {
    children: ReactElement;
}

export type ReducerAction = "SET_CURRENT_PAGE" | "SET_LOCALIZATION_PREFERENCE";

export interface DispatchParameters {
    type: ReducerAction;
    payload: any;
}
