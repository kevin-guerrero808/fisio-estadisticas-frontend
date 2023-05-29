const SERVER_IP = 'http://localhost:3977';
const API_VERSION = 'v1';
const BASE_PATH= `${SERVER_IP}/api/${API_VERSION}`;
const API_ROUTES = {
    AUTH: `${BASE_PATH}/auth`,
    USERS: `${BASE_PATH}/users`,
    MENU: `${BASE_PATH}/menu`
}

export {
    API_ROUTES
}