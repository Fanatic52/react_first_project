import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "b55240d2-dadf-40c5-9304-ff4116299789"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`/follow/` + userId)
    },
    unfollow(userId) {
        return instance.delete(`/follow/` + userId);
    }
}