export type PostType = {
    id: number
    message: string
    likes: number
}
export type PhotosType = {
    large: string | null,
    small: string | null,
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType
    followed: boolean
}
export type ProfileType = {
    userId: number,
    fullName: string,
    lookingForAJob: boolean,
    aboutMe: string
    lookingForAJobDescription: string,
    photos: PhotosType
    contacts: ContactsType
}