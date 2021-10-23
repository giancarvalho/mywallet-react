import axiosBase from "./axiosBase";

function createBearerAuth(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

function createUser(userData) {
    return axiosBase.post("/sign-up", userData);
}

function authenticateUser(userData) {
    return axiosBase.post("/sign-in", userData);
}

function getEntries(token) {
    console.log(createBearerAuth(token));
    return axiosBase.get("/entries", createBearerAuth(token));
}

export { createUser, authenticateUser, getEntries };
