import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType, UserType} from "../../types/types";
import {profileAPI} from "../../api/profile-apiI";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {ResultCodesEnum} from "../../api/api";

let initialState = {
    posts: [
        {id: 1, message: 'hi bro', likes: 12},
        {id: 2, message: 'you look very well', likes: 13},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};
type InitialStateType = typeof initialState;

type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case 'SN/PROFILE/ADD_POST':
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
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
        case 'SN/PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
            };
        case 'SN/PROFILE/SET_STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            if(state.profile == null) {
                throw new Error("user id can't be null");
            }
            return {
                    ...state,
                    profile: { ...state.profile, photos: action.photos },
            };
        default:
            return state;
    }
}

export const actions = {
    addPost: (newPostText: string) => ({ type: 'SN/PROFILE/ADD_POST', newPostText } as const),
    deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
    setUserStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const),
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}
export const getUserStatus = (userId: number): ThunkType => async (dispatch: any) => {
    let data = await profileAPI.getUserStatus(userId);
    dispatch(actions.setUserStatus(data));
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch: any) => {
    let data = await profileAPI.updateUserStatus(status);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setUserStatus(status));
    }
}
export const savePhoto = (photoFile: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(photoFile);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodesEnum.Success) {
        const userId = getState().auth.userId
        if(userId != null) {
            dispatch(getUserProfile(userId));
        }
        else {
            throw new Error("user id can't be null");
        }
    }
    else {
        dispatch(stopSubmit("profileData", {_error: data.messages[0]}));
        //return error message if we need to process it
        return Promise.reject(data.messages[0]);
    }
}


export default profileReducer;