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
    github: string | null,
    vk: string | null,
    facebook: string | null,
    instagram: string | null,
    twitter: string | null,
    website: string | null,
    youtube: string | null,
    mainLink: string | null,
}
export type UserType = {
    id: number | null,
    fullName: string | null,
    aboutMe: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    photos: PhotosType
    contacts: ContactsType
}