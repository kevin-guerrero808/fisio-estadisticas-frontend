const saveToken = (token) => {
    sessionStorage.setItem("token", token);
}

const getToken = () => {
    return sessionStorage.getItem("token");
}

export default {
    saveToken,
    getToken
}