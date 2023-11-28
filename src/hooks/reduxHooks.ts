import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {appDispatch, rootState} from "../types";

const useAppSelector: TypedUseSelectorHook<rootState> = useSelector
const useAppDispatch = () => useDispatch<appDispatch>()

export {
    useAppDispatch,
    useAppSelector
}