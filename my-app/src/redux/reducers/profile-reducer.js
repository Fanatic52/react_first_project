import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi bro', likes: 12},
        {id: 2, message: 'you look very well', likes: 13},
    ],
    newPostText: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts,
                    {
                        id: 5,
                        message: state.newPostText,
                        likes: 0,
                    }
                ],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
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

export const addPostCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text, });

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
        dispatch(setUserStatus(response.data));
    });
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
    });
}


export default profileReducer;