import {instance, APIResponseType} from "./api";

type MeResponseDataType = {
    id: number,
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`);
    },
    login(email: string, password: string, rememberMe = false, captcha = null as null | string) {
        return instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}