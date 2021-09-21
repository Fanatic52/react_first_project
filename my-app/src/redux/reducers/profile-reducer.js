import {usersAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'hi bro', likes: 12},
        {id: 2, message: 'you look very well', likes: 13},
    ],
    newPostText: '',
    profile: null,
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
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text, })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;