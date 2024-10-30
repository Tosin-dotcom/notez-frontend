export const withAuthHeaders = (config = {}) => {
    const token = localStorage.getItem('token'); 
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        },
    };
};
