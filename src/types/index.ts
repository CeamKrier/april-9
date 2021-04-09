import { ReactElement } from "react";

export interface StateKeys {}

export interface ContextProps {
    state: StateKeys;
    dispatch: ({ type, payload }: DispatchParameters) => void;
}

export interface ProviderProps {
    children: ReactElement;
}

export type ReducerAction = "SET_ROTATION_DEGREE" | "";

export interface DispatchParameters {
    type: ReducerAction;
    payload: any;
}
