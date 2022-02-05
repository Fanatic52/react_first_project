import {PhotosType, ProfileType, UserType} from "../types/types";
import {instance, APIResponseType} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(res => res.data)
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId)
            .then(res => res.data)
    },
    updateUserStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status})
            .then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData)
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profile)
            .then(res => res.data)
    }
}