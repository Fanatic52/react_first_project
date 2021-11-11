import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, UserType} from "../../types/types";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'hi bro', likes: 12},
        {id: 2, message: 'you look very well', likes: 13},
    ] as Array<PostType>,
    profile: {
        id: null,
        fullName: null,
        aboutMe: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {
            large: null,
            small: null,
        },
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        }
    } as UserType,
    status: '',
};
type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: 5,
                        message: action.newPostText,
                        likes: 0,
                    }
                ],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },
            };
        default:
            return state;
    }
}

type AddPostType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostType => ({ type: ADD_POST, newPostText });
type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId });
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: UserType
}
export const setUserProfile = (profile: UserType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile });
type SetUserStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setUserStatus = (status: string): SetUserStatusType => ({ type: SET_STATUS, status });
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
}
export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export const savePhoto = (photoFile: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(photoFile);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: UserType) => async (dispatch: any, getState: any) => {
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        let userId = getState().auth.userId;
        dispatch(getUserProfile(userId));
    }
    else {
        dispatch(stopSubmit("profileData", {_error: response.data.messages[0]}));
        //return error message if we need to process it
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;