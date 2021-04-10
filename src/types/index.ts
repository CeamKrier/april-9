import { ReactElement } from "react";

type LanguageTypes = "en" | "tr";

export interface StateKeys {
    currentPage: string;
    language: LanguageTypes;
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
