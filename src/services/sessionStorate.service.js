const saveToken = (token) => {
    console.log('token ' + token.access);
    localStorage.setItem("token", token.access);
}

const getToken = () => {
    return localStorage.getItem("token");
}

export default {
    saveToken,
    getToken
}