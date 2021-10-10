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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/` + userId)
    },
    unfollow(userId) {
        return instance.delete(`follow/` + userId);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}