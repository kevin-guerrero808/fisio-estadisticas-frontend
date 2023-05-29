import { API_ROUTES } from '../util/constants';

export default {
    getAllUsers: async () => {
        const token = localStorage.getItem('token');
        return await fetch(`${API_ROUTES.USERS}/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
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
        return await fetch(`${API_ROUTES.USERS}/new`, {
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
        const token = localStorage.getItem('token');
        return await fetch(`${API_ROUTES.USERS}/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
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