import api from '../utils/api';

const AuthService = {

  login: async (loginObject) => {
    try {
      const response = await api.post('/auth/login', {
        body: loginObject,
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Network error');
    }
  },


  register: async (registerObject) => {
    try {
      const response = await api.post('/auth/register', {
        body: registerObject,
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Network error');
    }
  },
};

export default AuthService;
