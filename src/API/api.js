import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4fbd42d6-223b-4526-964d-29d54adb14a3"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return (response.data);
        });
};

export const followUser = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => {
            return (response.data);
        })
};


export const unFollowUser = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => {
            return (response.data);
        })
};

export const getProfile = (userId) => {
    return instance.get(`profile/` + userId)
};

export const authMe = () => {
    return instance.get(`auth/me`)

};