import {AxiosResponse} from "axios";

export type IResType<T> = Promise<AxiosResponse<T>>;