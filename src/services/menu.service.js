import { API_ROUTES } from '../util/constants';

export default {
    createMenu: async (menu) => {
        return await fetch(`${API_ROUTES.MENU}/new`, {
            method: 'POST',
            body: JSON.stringify(menu),
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