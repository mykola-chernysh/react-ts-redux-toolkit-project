import {store} from "../redux";

type rootState = ReturnType<typeof store.getState>;
type appDispatch = typeof store.dispatch;

export type {
    rootState,
    appDispatch
}