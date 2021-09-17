const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [
        // {id: 1, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed:false, fullName: 'Dmitry', status: 'i am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        // {id: 2, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed:false, fullName: 'Sasha', status: 'i am a boss too', location: {city: 'Moscow', country: 'Russia'} },
        // {id: 3, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed:true, fullName: 'Andrey', status: 'i am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
    ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
                return {
                    ...state,
                    // users: [...state.users, ...action.users],
                    users: [...action.users],
                };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW,  userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export default usersReducer;