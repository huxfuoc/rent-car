import ApiMethods from "./ApiMethods";
import ENDPOINTS from "./EndPoint";

class ApiManager {
    static getUsers = async () => {
        const url = ENDPOINTS.RANDOM_USERS;
        try {
            const response = await ApiMethods.get(url);
            return response.results;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    };
}

export default ApiManager;
