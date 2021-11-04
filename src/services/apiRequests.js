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
    return axiosBase.get("/entries", createBearerAuth(token));
}

function createEntry(entry, token) {
    return axiosBase.post("/entries", entry, createBearerAuth(token));
}

function deleteEntry(id, token) {
    return axiosBase.delete(`/entries?id=${id}`, createBearerAuth(token));
}

export { createUser, authenticateUser, getEntries, createEntry, deleteEntry };
