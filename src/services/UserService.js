import api from '../utils/api';
import { withAuthHeaders } from '../utils/authUtils';


const UserService = {

    userProfile : async () => {
        try {
            const response = await api.get('/user/user-profile', {
                ...withAuthHeaders(),
            })
            return response.data
        } catch (err) {
            throw err.response ? err.response.data : new Error("Network Error")
        }
    }

}

export default UserService