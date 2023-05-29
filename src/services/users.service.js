import { API_ROUTES } from '../util/constants';

export default {
    getAllUsers: async () => {
        return await fetch(`${API_ROUTES.USERS}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error();
            }
        });
    },
    createUser: async (user) => {
        return await fetch(`${API_ROUTES.USERS}/`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error();
            }
        });
    },
    getUser: async (id) => {
        return await fetch(`${API_ROUTES.USERS}/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error();
            }
        });
    }
}