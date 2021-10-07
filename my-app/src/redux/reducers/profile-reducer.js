import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'hi bro', likes: 12},
        {id: 2, message: 'you look very well', likes: 13},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}


export default profileReducer;