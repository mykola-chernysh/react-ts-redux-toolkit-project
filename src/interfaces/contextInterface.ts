import {ISetState} from "../types";

export interface IContext {
    theme: string,
    setTheme: ISetState<string>
}