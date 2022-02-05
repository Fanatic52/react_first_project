import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "b55240d2-dadf-40c5-9304-ff4116299789"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    Captcha = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}