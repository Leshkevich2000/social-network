import * as axios from "axios";
import React from "react";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "51df671f-93be-4a46-81ae-5533d6b568ad"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return (response.data);
        });
}


export const updateUsers = (pageNumber = 1, pageSize = 10) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => {
            return (response.data);
        });
}
