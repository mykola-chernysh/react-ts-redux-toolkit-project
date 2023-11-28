import {AxiosResponse} from "axios";

type AxiosResponseType<T> = Promise<AxiosResponse<T>>;

export type {AxiosResponseType};