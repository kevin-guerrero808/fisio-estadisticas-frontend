import { API_ROUTES } from '../util/constants';

export default {
    login: async (data) => {
        return await fetch(`${API_ROUTES.AUTH}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}