import {UserType} from "../../types/types";
import {AppStateType, BaseThunkType, InferActionsTypes} from "../redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/users-api";

let initialState = {
    users: [ ] as Array<UserType>,
    pagesSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of users ids
};
type InitialStateType = typeof initialState;

type ActionTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionTypes>

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case 'SN/USER/FOLLOW':
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case 'SN/USER/UNFOLLOW':
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case 'SN/USER/SET_USERS':
                return {
                    ...state,
                    users: [...action.users],
                };
        case 'SN/USER/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case 'SN/USER/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case 'SN/USER/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case 'SN/USER/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const actions = {
    followSuccess: (userId: number) => ({ type: 'SN/USER/FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'SN/USER/UNFOLLOW',  userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SN/USER/SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SN/USER/SET_CURRENT_PAGE', currentPage } as const),
    setUsersTotalCount: (totalUsersCount: number) => ({ type: 'SN/USER/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    toggleIsFetching:  (isFetching: boolean) => ({ type: 'SN/USER/TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'SN/USER/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        let response = await usersAPI.getUsers(page, pageSize);
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(response.items));
        dispatch(actions.setUsersTotalCount(response.totalCount));
    }
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}
const followUnfollowFlow = async (dispatch: Dispatch<ActionTypes>,
                                  userId: number,
                                  apiMethod: any,
                                  actionCreator: (userId: number) => ActionTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export default usersReducer;